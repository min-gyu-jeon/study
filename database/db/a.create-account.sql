-- sql 주석

-- 1. 사용자 계정 생성 (DCL)
CREATE USER human@localhost IDENTIFIED BY "CHANGE_ME";
CREATE USER human@"%" IDENTIFIED BY "CHANGE_ME"; -- % = 모든 다른 컴퓨터(아무곳에서 접속)

FLUSH PRIVILEGES; -- 현재까지 실행한 계정 작업 확정

-- db 만들기
CREATE database shopdb 
 CHARACTER SET UTF8MB4
 COLLATE utf8mb4_general_ci;
 -- 권한 부여
 GRANT ALL PRIVILEGES ON shopdb.*TO human@localhost;
 GRANT ALL PRIVILEGES ON shopdb.*TO human@"%";
 
 FLUSH PRIVILEGES;
 
 -- 계정 생성 확인
 USE mysql; --작업 데이터베이스 변경
 
SELECT USER, HOST FROM USER;