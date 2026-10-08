-- 1. kamebook으로 작업 데이터베이스 변경
USE kamebook

-- 2. 주문번호, 회윈아이디, 회원이름, 주소, 주문일자, 주문수량 조회
SELECT *
FROM members m, order_h oh
WHERE m.memid = oh.memid
-- 3. 주문번호, 상품코드, 상품명, 가격, 수량 조회
SELECT *
FROM goodsinfo g, order_d od
WHERE od.goodscd = g.goodscd
-- 4. 주문번호, 주문일자, 상품코드, 가격, 수량, 취소여부 조회
SELECT *
FROM order_h oh, order_d od
WHERE od.orderno = oh.orderno

-- 5. 주문별 주문 상품 종류의 갯수 조회
SELECT oh.orderno, COUNT(*) 상품종류갯수
FROM order_h oh, order_d od
WHERE oh.orderno = od.orderno
GROUP BY oh.orderno
ORDER BY oh.orderno;

-- 6. 사용자아이디(members), 사용자이름(members), 사용자별 주문 총액(order_d), 평균 주문액(order_d) 조회
--    직접 관계가 없는 테이블을 관계 있는 다른 테이블을 경유해서 조회 -> 3개 이상의 테이블 Join

-- 7. 사용자아이디, 사용자이름, 사용자별 주문 총액, 평균 주문액 조회
--    members, order_h 테이블 사용