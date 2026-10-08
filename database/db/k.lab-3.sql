-- 0. labdb로 작업 데이터베이스 변경
USE labdb;

SHOW TABLES;

-- 1. 모든 도서의 이름과 가격을 검색하시오
SELECT bookname, price
FROM book;

-- 2. 모든 도서의 도서번호,  도서이름, 출판사, 가격을 검색하시오
SELECT bookid, bookname, publisher, price
FROM book;

-- 3. 도서 테이블에 있는 모든 출판사를 검색하시오 ( 중복 데이터 제거 )
SELECT publisher
FROM book;

-- 4. 가격이 20,000원 미만인 도서를 검색하시오
SELECT bookname, price
FROM book
WHERE price <20000;

-- 5. 가격이 10,000원 이상 20,000 이하인 도서를 검색하시오
SELECT bookname, price
FROM book
WHERE price BETWEEN 10000 AND 20000;

-- 6. 출판사가 ‘굿스포츠’ 혹은 ‘대한미디어’인 도서를 검색하시오
SELECT bookname, publisher
FROM book
WHERE publisher IN ('굿스포츠', '대한미디어');

-- 7. ‘축구의 역사’를 출간한 출판사를 검색하시오.
SELECT * FROM Book WHERE bookname LIKE '축구의 역사';

-- 8. 도서이름에 ‘축구’가 포함된 출판사를 검색하시오
SELECT bookname, publisher FROM Book WHERE bookname LIKE '%축구%';

-- 9. 축구에 관한 도서 중 가격이 20,000원 이상인 도서를 검색하시오
SELECT * FROM Book WHERE price >= 20000 AND bookname LIKE '%축구%';

-- 10. 도서를 이름순으로 검색하시오
SELECT * FROM Book ORDER BY bookname DESC;

-- 11. 도서를 가격순으로 검색하고, 가격이 같으면 이름순으로 검색하시오.
SELECT * FROM Book ORDER BY price, bookname;

-- 12. 도서를 가격의 내림차순으로 검색하시오. 만약 가격이 같다면 출판사의 오름차순으로 검색한다.
SELECT * FROM Book ORDER BY price DESC, publisher ASC;

-- 13. 고객이 주문한 도서의 총 판매액을 구하시오
SELECT SUM(saleprice) FROM orders;

-- 14. 김연아 고객이 주문한 도서의 총 판매액을 구하시오. ( 2개의 SQL )
--     먼저 customer 테이블에서 김연아 고객의 custid 조회
--     위에서 조회된 custid로 orders 테이블에서 총 판매액 조회
SELECT SUM(saleprice) FROM Orders WHERE custid = 2;

-- 15. 고객이 주문한 도서의 총 판매액, 평균값, 최저가, 최고가를 구하시오
SELECT SUM(saleprice) AVG(saleprice), MIN(saleprice), MAX(saleprice) FROM orders;

-- 16. 도서 판매 건수를 구하시오.
SELECT COUNT(*) FROM orders;

-- 17. 도서별 판매 건수를 구하시오.
SELECT COUNT() FROM orders;

-- 18. 고객별로 주문한 도서의 총 수량과 총 판매액을 구하시오
SELECT custid, SUM(saleprice) AS 총판매액, SUM(*) AS 총수량 FROM Orders GROUP BY custid; 

-- 19. 가격이 8,000원 이상인 도서를 구매한 고객에 대하여 
--     고객별 주문 도서의 총 수량을 구하시오. 단, 두 권 이상 구매한 고객만 구한다.
SELECT COUNT(custid) 
FROM orders 
WHERE saleprice >= 8000 
GROUP BY custid;

SELECT custid, COUNT(*) 
FROM orders 
WHERE saleprice >= 8000 
GROUP BY custid 
HAVING COUNT(*) >= 2;