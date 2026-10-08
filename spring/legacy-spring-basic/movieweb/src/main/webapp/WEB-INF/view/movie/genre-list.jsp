<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="context-path" content="${pageContext.request.contextPath}">
<title>${genreName} 영화 | 영화 리뷰 사이트</title>
<link rel="stylesheet"
      href="${pageContext.request.contextPath}/resources/styles/movie.css">
<script defer
        src="${pageContext.request.contextPath}/resources/js/movie-list.js"></script>
</head>
<body>
    <jsp:include page="/WEB-INF/view/modules/header.jsp" />

    <main id="genre-page" class="movie-page"
          data-genre-id="${genreId}"
          data-genre-name="${genreName}">
        <a class="back-link" href="${pageContext.request.contextPath}/">← 메인 페이지</a>

        <section class="genre-heading">
            <p class="section-eyebrow">MOVIE GENRE</p>
            <h1>${genreName}<span>${genreEnglishName}</span></h1>
            <p>${genreDescription}</p>
        </section>

        <aside class="theater-links" aria-labelledby="theater-title">
            <h2 id="theater-title">영화 예매하러 가기</h2>
            <a href="https://www.lottecinema.co.kr/NLCHS"
               target="_blank" rel="noopener noreferrer">롯데시네마</a>
            <a href="https://cgv.co.kr/"
               target="_blank" rel="noopener noreferrer">CGV</a>
        </aside>

        <p id="movie-status" class="movie-status" role="status">영화 정보를 불러오는 중입니다.</p>
        <section id="movie-list" class="movie-grid" aria-label="${genreName} 영화 목록"></section>

        <section class="popularity-section" aria-labelledby="popularity-title">
            <h2 id="popularity-title">인기도 순위</h2>
            <div id="popularity-list"></div>
        </section>
    </main>
</body>
</html>
