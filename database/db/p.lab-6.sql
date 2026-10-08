-- 1. 작업 데이터베이스 변경
USE kamebook;

-- 2. 주문 총액이 10000원 초과 주문의 고객 조회
SELECT 
memid,
memname
FROM members
WHERE memid IN ( SELECT memid
					  FROM 	order_h
					  WHERE 	ordamt > 10000);
					  
-- 3. 주문을 취소한 고객 조회
SELECT *
FROM members
WHERE memid IN ( SELECT DISTINCT memid
						FROM order_h
						WHERE cancelyn = 'N');
-- 4. 취소되지 않은 주문 중에서 'park' 고객의 주문 조회
SELECT *
FROM order_h
WHERE cancelyn = 'N'
  AND memid IN (
      SELECT memid
      FROM members
      WHERE memid = 'park'
  );
-- 5. 주문번호, 상품코드, 상품주문총액, 주문총액 조회
--    scalar subquery : select 절에 포함된 subquery
--    상관부속질의 : subquery에서 main query의 데이터를 사용하는 경우 
SELECT
    od.orderno,
    od.goodscd,
    od.amt AS 상품주문총액,(SELECT oh.ordamt
        								FROM order_h oh
        								WHERE oh.orderno = od.orderno) AS 주문총액
FROM order_d od;

-- 6. EXISTS : 대상 subquery의 조회 결과가 있으면 True 없으면 False
SELECT
    m.memid,
    m.memname
FROM members m
WHERE EXISTS (SELECT 1
    				FROM order_h oh
    				WHERE oh.memid = m.memid
);
-- 7. ANY, ALL : subquery의 결과가 여러 개인 경우 비교 연산에 사용하는 도구
--    ANY : subquery 결과 값 중 한 개만 만족하면 True (각 값에 대한 비교를 OR로 연결)
--    ALL : subquery 결과 값 모두에 대해 만족하면 True (각 값에 대한 비교를 AND로 연결)
