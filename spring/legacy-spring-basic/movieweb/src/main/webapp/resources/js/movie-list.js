document.addEventListener("DOMContentLoaded", async () => {
    const contextPath = document.querySelector('meta[name="context-path"]').content;
    const page = document.querySelector("#genre-page");
    const status = document.querySelector("#movie-status");
    const movieList = document.querySelector("#movie-list");
    const popularityList = document.querySelector("#popularity-list");

    try {
        const response = await fetch(
            `${contextPath}/api/tmdb/discover?genre=${encodeURIComponent(page.dataset.genreId)}`
        );
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "영화 정보를 불러오지 못했습니다.");
        }

        const movies = (data.results || []).filter(
            (movie) => movie.overview && movie.poster_path
        );

        if (movies.length === 0) {
            status.textContent = "표시할 영화가 없습니다.";
            return;
        }

        status.remove();
        movies.forEach((movie, index) => {
            movieList.append(createMovieCard(movie, contextPath));

            if (index < 10) {
                const popularity = document.createElement("p");
                popularity.className = "popularity-item";
                popularity.textContent = `${index + 1}. ${movie.title} · 인기도 ${Math.round(movie.popularity)}`;
                popularityList.append(popularity);
            }
        });
    } catch (error) {
        status.textContent = error.message;
    }
});

function createMovieCard(movie, contextPath) {
    const card = document.createElement("article");
    card.className = "movie-card";

    const link = document.createElement("a");
    link.className = "movie-poster-link";
    link.href = `${contextPath}/movie/detail?id=${encodeURIComponent(movie.id)}`;

    const image = document.createElement("img");
    image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    image.alt = `${movie.title} 포스터`;
    image.loading = "lazy";
    link.append(image);

    const title = document.createElement("h2");
    title.textContent = movie.title;

    const overview = document.createElement("p");
    overview.textContent = movie.overview;

    const meta = document.createElement("div");
    meta.className = "movie-meta";

    const releaseDate = document.createElement("span");
    releaseDate.textContent = movie.release_date || "개봉일 미정";

    const rating = document.createElement("span");
    rating.textContent = `평점 ${Number(movie.vote_average || 0).toFixed(1)}`;

    meta.append(releaseDate, rating);
    card.append(link, title, overview, meta);
    return card;
}
