USE shopdb

-- 1 카테고리 테이블에 데이터 삽입
SELECT * FROM category ORDER BY category_id;

INSERT INTO category (category_id, category_name)
VALUES (11, '문구/오피스'); -- category 11이 있는데 실행하면  오류

-- 2 category_id를 생략 auto_increment 때문에 자동 12 생성
INSERT INTO category (category_name)
VALUES ('여행/레저');

-- 마지막으로 발급된 자동증가값 조회
SELECT LAST_INSERT_ID();

-- stock 기본값(0), created_at 기본값(NOW()) 활용
INSERT INTO product (category_id, product_name, price)
VALUES (11, '볼펜 10자루 세트', 5900);

SELECT * FROM category

-- 여러건의 데이터를 한번에 저장
INSERT INTO category (category_name)
VALUES
    ('반려식물'),
    ('자동차용품'),
    ('악기');

-- 데이터 복사할 테이블 만들기
CREATE TABLE product_premium (
    product_id    INT            NOT NULL,
    product_name  VARCHAR(100)   NOT NULL,
    price         DECIMAL(10,0)  NOT NULL,
    copied_at     DATETIME       DEFAULT NOW()
);

-- product 테이블의 데이터를 조회해서 테이블에 삽입
INSERT INTO product_premium (product_id, product_name, price)
SELECT product_id, product_name, price
FROM product
WHERE price >= 30000;

SELECT * FROM product_premium

-- 없으면 삽입 있으면 수정
INSERT INTO category (category_id, category_name)
VALUES (1, '전자제품')
ON DUPLICATE KEY UPDATE category_name = '전자제품';

--파일 데이터를 읽어서 테이블에 삽입
LOAD DATA INFILE 'C:/mingyu/workspace/db/new_products.csv'
INTO TABLE product
CHARACTER SET utf8mb4
FIELDS TERMINATED BY ','          -- 컬럼 구분자
OPTIONALLY ENCLOSED BY '"'        -- 문자열 감싸는 기호 (선택)
LINES TERMINATED BY '\n'          -- 행 구분자
IGNORE 1 LINES                    -- 첫 줄(헤더) 무시
(product_id, category_id, product_name, price, stock);

SELECT * FROM product

-- 무선 마우스(product_id=1)의 재고를 60으로 수정
UPDATE product
SET stock = 60
WHERE product_id = 1;

-- 블루투스 키보드(product_id=3) 가격과 재고를 동시에 수정
UPDATE product
SET price = 49000,
    stock = 35
WHERE product_id = 3;

-- 전자기기(category_id=1) 전체 가격을 5% 인상
START TRANSACTION;
UPDATE product SET price = ROUND(price * 1.05)
ROLLBACK;
-- 전자기기(category_id=1) 전체 가격을 5% 인상
UPDATE product
SET price = ROUND(price * 1.05)
WHERE category_id = 1;

UPDATE product
SET stock = 0
ORDER BY stock ASC
LIMIT 2;

-- delete
USE shopdb
SELECT * FROM order_detail;
-- product_id가 11인 상품 삭제
DELETE FROM product
WHERE product_id = 11;

DELETE FROM product
WHERE stock = 0;

-- 가장 오래된 주문 3건 삭제
DELETE FROM orders
ORDER BY order_date ASC
LIMIT 3;

SELECT * FROM orders ORDER BY order_date ASC LIMIT 3;
SELECT * FROM order_detail WHERE order_id IN (1,2,3);

-- product_premium 테이블의 모든 데이터 초기화
TRUNCATE TABLE product_premium;
SELECT * FROM product_premium;