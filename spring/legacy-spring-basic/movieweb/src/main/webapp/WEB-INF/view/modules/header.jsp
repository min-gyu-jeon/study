<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}" />

<link rel="stylesheet"
      href="${contextPath}/resources/styles/header.css">

<header class="site-header">
	<a class="site-title" href="${contextPath}/">영화 리뷰 사이트</a>

	<nav class="site-nav" aria-label="주요 메뉴">
		<ul class="nav-menu">
			<li><a href="${contextPath}/#movie-intro">영화 소개</a></li>
			<li><a href="${contextPath}/#review-board">리뷰 게시판</a></li>
		</ul>

		<ul class="nav-auth">
			<c:choose>
				<c:when test="${not empty sessionScope.loginuser}">
					<li class="login-user">
						<c:out value="${sessionScope.loginuser.name}" />님
					</li>
					<li><a href="${contextPath}/account/logout">로그아웃</a></li>
				</c:when>
				<c:otherwise>
					<li><a href="${contextPath}/account/login">로그인</a></li>
					<li><a href="${contextPath}/account/register">회원가입</a></li>
				</c:otherwise>
			</c:choose>
		</ul>
	</nav>
</header>
