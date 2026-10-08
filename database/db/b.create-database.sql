
-- db 만들기
CREATE database shopdb 
 CHARACTER SET UTF8MB4
 COLLATE utf8mb4_general_ci;
 
 -- 데이터베이스 목록 표시
 SHOW DATABASES;
 
-- 작업 데이터베이스 변경

USE shopdb;

-- 현재 작업중인 데이터베이스 확인
SELECT DATABASE();

-- 데이터베이스 삭제
DROP DATABASE shopdb;

-- 데이터베이스있을때만 삭제
DROP DATABASE if EXISTS shopdb;

-- 없을때 생성
CREATE DATABASE if NOT EXISTS shopdb 
CHARACTER SET UTF8MB4
COLLATE utf8mb4_general_ci;

 -- 권한 부여
GRANT ALL PRIVILEGES ON shopdb.*TO human@localhost;
GRANT ALL PRIVILEGES ON shopdb.*TO human@"%";
 
FLUSH PRIVILEGES;
 
