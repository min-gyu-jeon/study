document.addEventListener("DOMContentLoaded", () => {
    const contextPath = document.querySelector('meta[name="context-path"]').content;
    const message = document.querySelector("#movie-api-message");
    const cards = document.querySelectorAll(".genre-card[data-genre-id]");

    cards.forEach(async (card) => {
        try {
            const response = await fetch(
                `${contextPath}/api/tmdb/discover?genre=${encodeURIComponent(card.dataset.genreId)}`
            );
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "영화 정보를 불러오지 못했습니다.");
            }

            const movie = data.results?.find((item) => item.poster_path);
            if (!movie) {
                return;
            }

            const posterArea = card.querySelector(".genre-poster");
            const image = document.createElement("img");
            image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            image.alt = "";
            posterArea.replaceChildren(image);
        } catch (error) {
            message.textContent = error.message;
        }
    });

    const timer = document.querySelector("#timer");
    const updateClock = () => {
        timer.textContent = new Date().toLocaleString("ko-KR");
    };
    updateClock();
    window.setInterval(updateClock, 1000);
});
