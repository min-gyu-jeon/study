USE shopdb;
SELECT NOW(),CURRENT_TIMESTAMP();

-- 테이블의 모든 데이터 조회
SELECT category_id, category_name
FROM category;

SELECT * 		/* * = 모든 컬럼을 테이블을 만들 때 지정한 순서대로 사용 */ 
FROM category;

DESC product;

SELECT
product_name AS 상품명,
price 		 AS 판매가격,
stock 			재고수량
FROM product;

SELECT * FROM customer;

-- 가격이 30,000원 이상인 상품 조회
SELECT product_name, price
FROM product
WHERE price >= 30000;

-- 전자기기(category_id=1) 중 가격이 30,000원 이상인 상품
SELECT product_name, price
FROM product
WHERE category_id = 1
  AND price >= 30000;
  
-- 배송완료이거나 배송중인 주문 조회
SELECT order_id, customer_id, status
FROM orders
WHERE status = '배송완료'
   OR status = '배송중';

-- 전자기기가 아닌 상품 조회
SELECT product_name, category_id
FROM product
WHERE NOT category_id = 1;

SELECT order_id, customer_id, status
FROM orders
WHERE NOT (status = '배송완료'
   OR status = '배송중');

-- 범위를 조건으로하는 조회
SELECT product_name, price
FROM product
WHERE price BETWEEN 20000 AND 50000;

-- 2024년 1분기(1~3월) 주문 조회
SELECT order_id, order_date, status
FROM orders
WHERE order_date BETWEEN '2024-01-01' AND '2024-03-31';

-- 전자기기(1), 도서(3), 스포츠용품(4) 카테고리 상품 조회
SELECT product_name, category_id, price
FROM product
WHERE category_id IN (1, 3, 4);

SELECT product_name, category_id
FROM product
WHERE category_id NOT IN (1, 2, 3);

-- 상품명에 '마우스'가 포함된 상품
SELECT product_name, price
FROM product
WHERE product_name LIKE '%마우스%';

SELECT name, email
FROM customer
WHERE email LIKE 'kim%';

-- 이름이 두 글자인 고객 (드문 경우이나 연습용)
SELECT name FROM customer WHERE name LIKE '__';

-- 전화번호가 없는(NULL) 고객 조회
SELECT name, email, phone
FROM customer
WHERE phone IS NULL;

-- 상품 설명이 있는 상품만 조회
SELECT product_name, description
FROM product
WHERE description IS NOT NULL;

-- 가격 높은 순으로 상품 조회 정의 안하면 오름차순 (ASC)
SELECT product_name, price
FROM product
ORDER BY price DESC;
-- ORDER BY price ASC;

-- 카테고리 오름차순, 같은 카테고리 안에서는 가격 내림차순
SELECT category_id, product_name, price
FROM product
ORDER BY category_id ASC, price DESC;

-- 가장 비싼 상품 3개
SELECT product_name, price
FROM product
ORDER BY price DESC
LIMIT 3;

-- 집계함수  product 테이블 전체 통계
SELECT
    COUNT(*)          AS 전체상품수,
    SUM(price)        AS 가격합계,
    AVG(price)        AS 평균가격,
    MAX(price)        AS 최고가격,
    MIN(price)        AS 최저가격
FROM product;

-- 카테고리별 상품 수와 평균 가격
SELECT
    category_id,	-- group by에 지정된 컬럼난 select에 포함될 수 있음
    COUNT(*)       AS 상품수,
    AVG(price)     AS 평균가격,
    MAX(price)     AS 최고가격
FROM product
GROUP BY category_id;

-- 주문별 결제 금액 합산 (많은 순)
SELECT
    order_id,
    SUM(quantity * unit_price) AS 총결제금액
FROM order_detail
GROUP BY order_id
ORDER BY 총결제금액 DESC;

-- 상품이 2개 이상인 카테고리만 조회
SELECT
    category_id,
    COUNT(*) AS 상품수
FROM product
GROUP BY category_id
HAVING COUNT(*) >= 2;