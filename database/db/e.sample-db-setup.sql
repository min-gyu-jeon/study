GRANT ALL PRIVILEGES ON kamebook.*TO human@localhost;
GRANT ALL PRIVILEGES ON kamebook.*TO human@"%";
 
FLUSH PRIVILEGES;

USE kamebook;
-- 2. members 테이블 만들기 ( DDL )
CREATE TABLE `members` 
(
	`memid` VARCHAR(9) NOT NULL,
	`memname` VARCHAR(20) NOT NULL,
	`passwd` VARCHAR(128) NULL,
	`passwdmdt` DATETIME NULL,
	`jumin` VARCHAR(64) NULL,
	`addr` VARCHAR(100) NULL,
	`birthday` DATE NULL,
	`jobcd` CHAR(1) NULL,
	`mileage` DECIMAL(7,0) NULL DEFAULT '0',
	`stat` ENUM('Y','N') NOT NULL DEFAULT 'Y',
	`enterdtm` DATETIME NOT NULL DEFAULT current_timestamp(),
	`leavedtm` DATETIME NULL,
    PRIMARY KEY (`memid`)
);

-- 3. members 테이블 제거 ( DDL )
-- DROP TABLE members;

-- 4. goodsinfo 테이블 만들기 ( DDL )
CREATE TABLE `goodsinfo` (
	`goodscd` CHAR(5) NOT NULL,
	`goodsname` VARCHAR(20) NOT NULL,
	`unitcd` CHAR(2) NULL,
	`unitprice` DECIMAL(5,0) NOT NULL DEFAULT '0',
	`stat` ENUM('Y','N') NOT NULL DEFAULT 'Y',
	`insdtm` DATETIME NOT NULL DEFAULT current_timestamp(),
	`moddtm` DATETIME NULL,
	PRIMARY KEY (`goodscd`)
);

-- 5. order_h 테이블 만들기 ( DDL )
CREATE TABLE `order_h` (
	`orderno` CHAR(9) PRIMARY KEY, -- PRIMARY KEY : 자동으로 NOT NULL
	`orddt` DATE NOT NULL,
	`memid` VARCHAR(9) NOT NULL,
	`ordamt` DECIMAL(7,0) NOT NULL DEFAULT '0',
	`cancelyn` ENUM('Y','N') NOT NULL DEFAULT 'N',
	`canceldtm` DATETIME NULL,
	`insdtm` DATETIME NOT NULL DEFAULT current_timestamp(),
	`moddtm` DATETIME NULL
);

-- 6. order_d 테이블 만들기 ( DDL )

CREATE TABLE `order_d` (
	`orderno` CHAR(9) NOT NULL,
	`goodscd` CHAR(5) NOT NULL,
	`unitcd` CHAR(2) NULL,
	`unitprice` DECIMAL(5,0) NOT NULL DEFAULT '0',
	`qty` DECIMAL(3,0) NOT NULL DEFAULT '0',
	`amt` DECIMAL(7,0) NOT NULL DEFAULT '0',
	`insdtm` DATETIME NOT NULL DEFAULT current_timestamp(),
	`moddtm` DATETIME NULL,
	PRIMARY KEY (`orderno`, `goodscd`)  -- 두개의 컬럼으로 기본키 만들기(복합프라이머리키)
);

-- 테이블에 대해 설명하는 명령어
DESCRIBE order_d; -- dedc order_d;도 가능