document.addEventListener("DOMContentLoaded", async () => {
    const contextPath = document.querySelector('meta[name="context-path"]').content;
    const detail = document.querySelector("#movie-detail");
    const id = new URLSearchParams(window.location.search).get("id");

    if (!id || !/^\d+$/.test(id)) {
        showError(detail, "잘못된 영화 번호입니다.");
        return;
    }

    try {
        const response = await fetch(`${contextPath}/api/tmdb/movie/${encodeURIComponent(id)}`);
        const movie = await response.json();

        if (!response.ok) {
            throw new Error(movie.message || "영화 상세 정보를 불러오지 못했습니다.");
        }

        renderMovie(detail, movie);
    } catch (error) {
        showError(detail, error.message);
    }
});

function renderMovie(container, movie) {
    const content = document.createElement("div");
    content.className = "detail-content";

    const image = document.createElement("img");
    image.className = "detail-poster";
    image.src = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "";
    image.alt = `${movie.title} 포스터`;

    const info = document.createElement("div");
    info.className = "detail-info";

    const title = document.createElement("h1");
    title.textContent = movie.title;
    info.append(title);

    const genres = (movie.genres || []).map((genre) => genre.name).join(", ") || "정보 없음";
    info.append(
        createInfoRow("줄거리", movie.overview || "등록된 줄거리가 없습니다."),
        createInfoRow("장르", genres),
        createInfoRow("개봉일", movie.release_date || "미정"),
        createInfoRow("평점", Number(movie.vote_average || 0).toFixed(1)),
        createInfoRow("인기도", Math.round(movie.popularity || 0).toString())
    );

    content.append(image, info);
    container.replaceChildren(content);
}

function createInfoRow(label, value) {
    const row = document.createElement("p");
    row.className = "detail-row";

    const strong = document.createElement("strong");
    strong.textContent = `${label}: `;
    row.append(strong, document.createTextNode(value));
    return row;
}

function showError(container, message) {
    const error = document.createElement("p");
    error.className = "movie-status";
    error.textContent = message;
    container.replaceChildren(error);
}
