<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="context-path" content="${pageContext.request.contextPath}">
<title>영화 상세 | 영화 리뷰 사이트</title>
<link rel="stylesheet"
      href="${pageContext.request.contextPath}/resources/styles/movie.css">
<script defer
        src="${pageContext.request.contextPath}/resources/js/movie-detail.js"></script>
</head>
<body>
    <jsp:include page="/WEB-INF/view/modules/header.jsp" />

    <main class="movie-page">
        <a class="back-link" href="${pageContext.request.contextPath}/">← 영화 목록으로</a>

        <div class="detail-layout">
            <aside class="theater-links detail-theater" aria-labelledby="theater-title">
                <h2 id="theater-title">영화 예매하러 가기</h2>
                <a href="https://www.lottecinema.co.kr/NLCHS"
                   target="_blank" rel="noopener noreferrer">롯데시네마</a>
                <a href="https://cgv.co.kr/"
                   target="_blank" rel="noopener noreferrer">CGV</a>
            </aside>

            <section id="movie-detail" class="movie-detail" aria-live="polite">
                <p class="movie-status">영화 상세 정보를 불러오는 중입니다.</p>
            </section>
        </div>
    </main>
</body>
</html>
