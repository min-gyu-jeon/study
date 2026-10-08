<%@ page language="java"
         contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>로그인 | 영화 리뷰 사이트</title>
<link rel="stylesheet"
      href="${pageContext.request.contextPath}/resources/styles/account.css">
</head>
<body>

    <jsp:include page="/WEB-INF/view/modules/header.jsp" />

    <main class="account-page">
        <section class="account-card" aria-labelledby="login-title">
            <p class="account-eyebrow">MOVIE REVIEW</p>
            <h1 id="login-title">로그인</h1>
            <p class="account-description">계정으로 로그인하고 영화 감상을 나눠보세요.</p>

            <form action="${pageContext.request.contextPath}/account/login"
                  method="post">

                <div class="form-field">
                    <label for="memberId">아이디</label>
                    <input id="memberId"
                           type="text"
                           name="memberId"
                           autocomplete="username"
                           placeholder="아이디를 입력하세요"
                           required>
                </div>

                <div class="form-field">
                    <label for="passwd">비밀번호</label>
                    <input id="passwd"
                           type="password"
                           name="passwd"
                           autocomplete="current-password"
                           placeholder="비밀번호를 입력하세요"
                           required>
                </div>

                <button class="account-submit" type="submit">로그인</button>
            </form>

            <p class="account-switch">
                아직 계정이 없나요?
                <a href="${pageContext.request.contextPath}/account/register">회원가입</a>
            </p>
        </section>
    </main>

</body>
</html>
