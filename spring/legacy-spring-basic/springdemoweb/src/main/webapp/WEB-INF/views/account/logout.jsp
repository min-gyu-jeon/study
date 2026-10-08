<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그아웃</title>
</head>

<body>

	<h2>로그아웃</h2>

	<!-- 현재 로그인한 회원의 아이디 출력 -->
	<p>
		${sessionScope.loginMember.memberId}님 로그아웃 하시겠습니까?
	</p>

	<!-- LogoutServlet으로 이동하여 세션 종료 -->
	<a href="${pageContext.request.contextPath}/account/logout">
		로그아웃
	</a>

	<!-- 로그아웃하지 않고 이전 페이지로 이동 -->
	<button type="button" onclick="history.back()">
		취소
	</button>

</body>
</html>