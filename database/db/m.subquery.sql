-- 작업 db 변경
USE shopdb;

-- 평균 가격보다 비싼 상품 조회
SELECT AVG(price) --평균 가격조회 -> 44700
FROM product;

SELECT *
FROM product
WHERE price > 44700;

SELECT *
FROM product
WHERE price > (SELECT AVG(price) FROM product);

-- '배송완료' 상태 주문을 한 고객의 이름과 이메일 조회
SELECT c.`name`, c.email, o.status
FROM customer c
INNER JOIN orders o
ON c.customer_id = o.customer_id
WHERE o.`status` = '배송완료';


SELECT c.`name`, c.email
FROM customer c
WHERE customer_id IN (SELECT DISTINCT customer_id 
							 FROM orders o 
							 WHERE o.status = '배송완료');
							 
-- 주문별 결제 금액을 먼저 집계한 뒤, 그 결과에서 5만원 이상인 주문만 조회
SELECT *
FROM (select order_id,
				sum(unit_price * quantity) AS amount
				FROM order_detail
				GROUP BY order_id) t
WHERE t.amount >50000;

USE shopdb
-- 8-2. 생년월일이 2번째로 빠른 직원부터 3명 조회
SELECT * 
FROM(
SELECT * 
FROM members
ORDER BY birthday
LIMIT 1,3)t
ORDER BY t.birthday DESC; 

-- 각 상품의 가격과 전체 평균 가격 차이 조회
SELECT
    product_name,
    price,
    (SELECT AVG(price) FROM product)       AS 평균가격,
    price - (SELECT AVG(price) FROM product) AS 평균과의차이
FROM product
ORDER BY 평균과의차이 DESC;

-- 주문 이력이 있는 고객만 조회
SELECT name, email
FROM customer c
WHERE EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customer_id = c.customer_id
);

-- 주문 이력이 없는 고객 조회
SELECT name, email
FROM customer c
WHERE NOT EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customer_id = c.customer_id -- 서브쿼리에서 메인쿼리의 컬럼을 사용하는 경우: 상관부속질의
);