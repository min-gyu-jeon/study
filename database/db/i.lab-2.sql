-- 1
USE kamebook;

-- 
SHOW TABLES;

SELECT *
FROM order_d

SELECT *
FROM order_h

SELECT *
FROM goodsinfo
-- 2
SELECT *
FROM members;

-- 3
SELECT memid, memname, addr, birthday
FROM members;

-- 4
SELECT 
	memid		AS 아이디, 
	memname	AS 이름, 
	addr		AS 주소, 
	birthday	AS 생일
FROM members;

-- 5
SELECT 
	memid		AS 아이디, 
	memname	AS 이름, 
	addr		AS 주소, 
	birthday	AS 생일
FROM members
ORDER BY birthday ;

-- 6
SELECT 
	memid		AS 아이디, 
	memname	AS 이름, 
	addr		AS 주소, 
	birthday	AS 생일
FROM members
ORDER BY memname, birthday ;

-- 7
SELECT
memid		AS 아이디, 
memname		AS 이름,
jobcd    AS 직업코드
FROM members;

-- 8-1
SELECT
memname, birthday
FROM members
ORDER BY birthday
LIMIT 3;

-- 8-2
SELECT
memname, birthday
FROM members
ORDER BY birthday
LIMIT 2, 3;

-- 9
SELECT 
concat("[" , memid, "] ", memname) 아이디와이름, 
mileage + 1000 보너스합산마일리지
FROM members; 

-- 10
SELECT
memid, memname, mileage
FROM members
WHERE NOT mileage  = 0;

-- 11
SELECT
memid, memname, mileage
FROM members
WHERE  mileage  = 0;

-- 12
SELECT
memid, memname, birthday
FROM members
WHERE birthday LIKE '20%';

-- 13
SELECT
memid, memname, birthday
FROM members
WHERE birthday LIKE '2002%';

-- 14
SELECT
memid, memname, jobcd 
FROM members
WHERE jobcd IN (1, 4, 9);

-- 15
SELECT
memid, memname, jobcd 
FROM members
WHERE jobcd NOT IN (1, 4, 9);

-- 16
SELECT
memid, memname, addr
FROM members
WHERE addr LIKE '인천%';

-- 17
SELECT
memid, memname
FROM members
WHERE memname LIKE '%갑%';

-- 18
SELECT
memid, memname
FROM members
WHERE memname LIKE '%갑%';

-- 19
SELECT
memid, memname, jumin
FROM members
WHERE jumin IS NULL;

-- 20
SELECT SUM(ordamt), 
AVG(ordamt), 
MAX(ordamt), 
MIN(ordamt), 
COUNT(ordamt)
FROM order_h;

-- 21
SELECT memid, 
SUM(ordamt), 
AVG(ordamt), 
MAX(ordamt), 
MIN(ordamt),
COUNT(ordamt)
FROM order_h
GROUP BY memid;

-- 22. 주문 건수가 2건 이상인 고객의 
--    고객별 주문 총액, 평균, 최고액, 최저액, 건수 조회
SELECT memid, SUM(ordamt), AVG(ordamt), MAX(ordamt), MIN(ordamt), COUNT(ordamt)
FROM order_h
-- WHERE COUNT(ordamt) >= 2 -- 오류 : 집계함수는 group by 이후에 사용 가능
GROUP BY memid
HAVING COUNT(ordamt) >= 2; -- HAVING : group by 이후에 실행하는 조건절   