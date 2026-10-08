USE shopdb;

SELECT CONCAT('안녕', '하세요', '!');

SELECT
    CONCAT(name, ' <', email, '>') AS 고객정보
FROM customer;

SELECT CONCAT_WS(' / ', name, email, phone) AS 고객정보
FROM customer;

-- 문자열의 길이
SELECT
    '홍길동'              AS 이름,
    LENGTH('홍길동')      AS 바이트수,
    CHAR_LENGTH('홍길동') AS 문자수;
    
-- 이메일 길이가 20자 이하인 고객 조회

SELECT name, email, CHAR_LENGTH(email) AS 이메일길이
FROM customer
WHERE CHAR_LENGTH(email) <= 15
ORDER BY 이메일길이;

--부분 문자열 조회
SELECT
    SUBSTRING('2024-01-15', 1, 4) AS 연도,
    SUBSTRING('2024-01-15', 6, 2) AS 월,
    SUBSTRING('2024-01-15', 9, 2) AS 일;
    
SELECT
    email,
    SUBSTRING_INDEX(email, '@', 1)  AS 아이디,
    SUBSTRING_INDEX(email, '@', -1) AS 도메인
FROM customer;

-- 연락처에서 하이픈(-) 제거
SELECT name, phone, REPLACE(phone, '-', '') AS 하이픈제거
FROM customer;

-- 상품 ID를 3자리로 맞추기 (001, 002 ...)
SELECT
    LPAD(product_id, 3, '0') AS 상품코드,
    product_name
FROM product;

-- 년, 월, 일, 시, 분, 초 조회
SELECT
    order_date,
    YEAR(order_date)    AS 연도,
    MONTH(order_date)   AS 월,
    DAY(order_date)     AS 일,
    HOUR(order_date)    AS 시,
    MINUTE(order_date)  AS 분,
    SECOND(order_date)  AS 초
FROM orders
WHERE order_id = 1;

-- 월별 주문 건수 집계

SELECT
    YEAR(order_date)  AS 연도,
    MONTH(order_date) AS 월,
    COUNT(*)          AS 주문건수
FROM orders
GROUP BY YEAR(order_date), MONTH(order_date)
ORDER BY 연도, 월;

-- 오늘 기준 각 주문의 경과 일수

SELECT
    order_id,
    order_date,
    DATEDIFF(CURDATE(), order_date) AS 경과일수,
    status
FROM orders
ORDER BY 경과일수 DESC;

-- 주문일부터 현재까지 경과 개월 수
SELECT
    order_id,
    order_date,
    TIMESTAMPDIFF(week, order_date, CURDATE()) AS 경과주,
    TIMESTAMPDIFF(MONTH, order_date, CURDATE()) AS 경과개월
FROM orders;

SELECT
    '2024-01-15'                                  AS 주문일,
    DATE_ADD('2024-01-15', INTERVAL 30 DAY)       AS 30일후,
    DATE_ADD('2024-01-15', INTERVAL 3 MONTH)      AS 3개월후,
    DATE_SUB('2024-01-15', INTERVAL 7 DAY)        AS 7일전;

-- 날짜 표시 형식 지정
SELECT
    order_id,
    order_date,
    DATE_ADD(order_date, INTERVAL 3 DAY) AS 예상배송완료일
FROM orders;

-- 가격대별 상품 등급 분류

SELECT
    product_name,
    price,
    CASE
        WHEN price < 20000            THEN '저가'
        WHEN price BETWEEN 20000 AND 49999 THEN '중가'
        WHEN price >= 50000           THEN '고가'
    END AS 가격등급
FROM product
ORDER BY price;

SELECT '전체건수', COUNT(*) 건수
FROM orders
UNION
SELECT `status`, COUNT(*) 건수
FROM orders
GROUP BY STATUS;

SELECT
    COUNT(*)                                      AS 전체,
    SUM(CASE WHEN status = '배송완료' THEN 1 ELSE 0 END) AS 배송완료,
    SUM(CASE WHEN status = '배송중'   THEN 1 ELSE 0 END) AS 배송중,
    SUM(CASE WHEN status = '주문완료' THEN 1 ELSE 0 END) AS 주문완료
FROM orders;