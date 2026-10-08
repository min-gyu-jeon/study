import './BookSearch.css';

export default function BookSearchItem({ book }) {
  if (!book) return null;

  const {
    title,
    link,
    image,
    author,
    discount,
    publisher,
    pubdate,
    isbn,
    description
  } = book;

  // HTML 태그 제거용 헬퍼 함수 (네이버 API가 <b> 태그 등을 반환할 때 대비)
  const cleanText = (text) => {
    return text ? text.replace(/<[^>]*>?/gm, '') : '';
  };

  // 출판일 포맷팅 (YYYYMMDD -> YYYY.MM.DD)
  const formatDate = (dateStr) => {
    if (!dateStr || dateStr.length !== 8) return dateStr || '정보 없음';
    return `${dateStr.substring(0, 4)}.${dateStr.substring(4, 6)}.${dateStr.substring(6, 8)}`;
  };

  // 가격 포맷팅 (원화 표시)
  const formatPrice = (priceStr) => {
    if (!priceStr) return '판매가 정보 없음';
    const price = parseInt(priceStr, 10);
    return isNaN(price) ? priceStr : `${price.toLocaleString()}원`;
  };

  return (
    <div className="book-item-card">
      <div className="book-item-image-wrapper">
        <img 
          src={image || 'https://via.placeholder.com/150x210?text=No+Image'} 
          alt={cleanText(title)} 
          className="book-item-image" 
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/150x210?text=No+Image';
          }}
        />
      </div>
      <div className="book-item-info">
        <h3 className="book-item-title" title={cleanText(title)}>
          {cleanText(title)}
        </h3>
        <p className="book-item-meta">
          <span className="book-item-author" title={cleanText(author)}>{cleanText(author)}</span>
          <span className="book-item-separator">|</span>
          <span className="book-item-publisher" title={cleanText(publisher)}>{cleanText(publisher)}</span>
        </p>
        <p className="book-item-pubdate">출판일: {formatDate(pubdate)}</p>
        <p className="book-item-price">
          할인가: <span className="price-highlight">{formatPrice(discount)}</span>
        </p>
        <p className="book-item-description" title={cleanText(description)}>
          {cleanText(description)}
        </p>
        <div className="book-item-footer">
          <span className="book-item-isbn">ISBN: {isbn || '없음'}</span>
          <a href={link} target="_blank" rel="noopener noreferrer" className="book-item-link-btn">
            상세 보기
          </a>
        </div>
      </div>
    </div>
  );
}
