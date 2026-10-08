<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="context-path" content="${pageContext.request.contextPath}">
<title>영화 리뷰 사이트</title>
<link rel="stylesheet"
      href="${pageContext.request.contextPath}/resources/styles/home.css">
<script defer
        src="${pageContext.request.contextPath}/resources/js/movie-main.js"></script>
</head>
<body>
    <jsp:include page="/WEB-INF/view/modules/header.jsp" />

    <main class="movie-home">
        <section id="movie-intro" class="genre-section" aria-labelledby="genre-title">
            <p class="section-eyebrow">DISCOVER MOVIES</p>
            <h1 id="genre-title">장르별 영화 소개</h1>
            <p class="section-description">원하는 장르를 선택하면 현재 인기 영화를 확인할 수 있습니다.</p>

            <div class="genre-container">
                <a class="genre-card" data-genre-id="878"
                   href="${pageContext.request.contextPath}/movie/genre/sf">
                    <div class="genre-poster" aria-hidden="true">
                        <span class="poster-placeholder">SF</span>
                    </div>
                    <div class="genre-name">SF</div>
                </a>

                <a class="genre-card" data-genre-id="53"
                   href="${pageContext.request.contextPath}/movie/genre/thriller">
                    <div class="genre-poster" aria-hidden="true">
                        <span class="poster-placeholder">THRILLER</span>
                    </div>
                    <div class="genre-name">스릴러</div>
                </a>

                <a class="genre-card" data-genre-id="35"
                   href="${pageContext.request.contextPath}/movie/genre/comedy">
                    <div class="genre-poster" aria-hidden="true">
                        <span class="poster-placeholder">COMEDY</span>
                    </div>
                    <div class="genre-name">코미디</div>
                </a>
            </div>

            <p id="movie-api-message" class="api-message" role="status"></p>
            <div id="timer" class="movie-timer" aria-live="polite"></div>
        </section>

        <section id="review-board" class="review-guide" aria-labelledby="review-title">
            <p class="section-eyebrow">MOVIE REVIEW</p>
            <h2 id="review-title">리뷰 게시판</h2>
            <p>리뷰 기능은 준비 중입니다. 로그인 기능과 연결해 다음 단계에서 작성·목록·상세 기능을 추가할 수 있습니다.</p>
        </section>
    </main>
</body>
</html>
