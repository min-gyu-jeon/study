<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="jakarta.tags.core"%>

<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>회원가입 | 영화 리뷰 사이트</title>
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/styles/account.css">
</head>
<body>

	<jsp:include page="/WEB-INF/view/modules/header.jsp" />

	<main class="account-page">
		<section class="account-card" aria-labelledby="register-title">
			<p class="account-eyebrow">MOVIE REVIEW</p>
			<h1 id="register-title">회원가입</h1>
			<p class="account-description">회원 정보를 입력하고 영화 리뷰를 시작해보세요.</p>

			<c:if test="${param.error eq 'duplicate'}">
				<p class="error-message">이미 사용 중인 아이디입니다.</p>
			</c:if>

			<form action="${pageContext.request.contextPath}/account/register"
				method="post">

				<div class="form-field">
					<label for="memberId">아이디</label> <input id="memberId" type="text"
						name="memberId" autocomplete="username"
						placeholder="사용할 아이디를 입력하세요" required>
				</div>

				<div class="form-field">
					<label for="passwd">비밀번호</label> <input id="passwd" type="password"
						name="passwd" autocomplete="new-password"
						placeholder="비밀번호를 입력하세요" required>
				</div>

				<div class="form-field">
					<label for="name">이름</label> <input id="name" type="text"
						name="name" autocomplete="name" placeholder="이름을 입력하세요" required>
				</div>

				<div class="form-field">
					<label for="email">이메일</label> <input id="email" type="email"
						name="email" autocomplete="email" placeholder="example@email.com"
						required>
				</div>

				<button class="account-submit" type="submit">회원가입</button>
			</form>

			<p class="account-switch">
				이미 계정이 있나요? <a
					href="${pageContext.request.contextPath}/account/login">로그인</a>
			</p>
		</section>
	</main>

</body>
</html>
