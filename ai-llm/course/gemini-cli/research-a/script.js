// API 키 없이 Google News RSS를 JSON으로 변환하여 사용
const newsContainer = document.getElementById('news-container');
const loader = document.getElementById('loader');
const errorMessage = document.getElementById('error-message');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// RSS-to-JSON 변환 서비스를 사용하여 CORS 우회 및 JSON 데이터 획득
async function fetchNews(query = 'IT') {
    showLoader();
    newsContainer.innerHTML = '';
    
    try {
        // Google News RSS URL (한국어, IT 분야)
        const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=ko&gl=KR&ceid=KR:ko`;
        
        // rss2json 무료 API 서비스를 사용하여 RSS를 JSON으로 변환
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
        const data = await response.json();

        if (data.status !== 'ok') {
            throw new Error('뉴스를 불러오는 중 오류가 발생했습니다.');
        }

        hideLoader();

        if (!data.items || data.items.length === 0) {
            newsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">검색 결과가 없습니다.</p>';
            return;
        }

        data.items.forEach(item => {
            const card = createCard(item);
            if (card) newsContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Error fetching news:', error);
        showError(error.message);
    }
}

function createCard(item) {
    const card = document.createElement('div');
    card.className = 'news-card';

    // Google News RSS는 이미지를 직접 주지 않는 경우가 많아 기본 테크 이미지를 사용하거나 설명에서 추출 시도
    let imageUrl = item.thumbnail || item.enclosure.link || '';
    
    // 이미지가 없는 경우를 위한 랜덤 테크 이미지 (Unsplash 사용)
    if (!imageUrl) {
        imageUrl = `https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80&auto=format&fit=crop`;
    }

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = item.title;
    img.style.width = '100%';
    img.style.height = '180px';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '8px';
    img.style.marginBottom = '1rem';
    card.appendChild(img);

    const title = document.createElement('h2');
    // 제목에서 출처( - 출처명) 부분 제거 시도
    const cleanTitle = item.title.replace(/\s-\s.*$/, '');
    title.textContent = cleanTitle;

    // 요약 내용 (HTML 태그 제거)
    const description = document.createElement('p');
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = item.description;
    const textContent = tempDiv.textContent || tempDiv.innerText || "";
    description.textContent = textContent.substring(0, 100) + '...';
    description.style.fontSize = '0.9rem';
    description.style.color = 'var(--text-muted)';
    description.style.marginBottom = '1rem';

    const meta = document.createElement('div');
    meta.className = 'meta';
    
    const date = new Date(item.pubDate).toLocaleDateString('ko-KR');
    meta.innerHTML = `
        <span>👤 ${item.author || '뉴스'}</span>
        <span>📅 ${date}</span>
    `;

    const link = document.createElement('a');
    link.href = item.link;
    link.target = '_blank';
    link.className = 'btn';
    link.textContent = '기사 보기';

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(meta);
    card.appendChild(link);

    return card;
}

function showLoader() {
    loader.classList.remove('hidden');
    errorMessage.classList.add('hidden');
}

function hideLoader() {
    loader.classList.add('hidden');
}

function showError(message) {
    loader.classList.add('hidden');
    errorMessage.classList.remove('hidden');
    errorMessage.querySelector('p').textContent = `에러: ${message}`;
}

// 검색 이벤트 리스너
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) fetchNews(query);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) fetchNews(query);
    }
});

// 초기화 실행
document.addEventListener('DOMContentLoaded', () => {
    fetchNews('IT');
});
