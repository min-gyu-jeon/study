CREATE database labdb 
CHARACTER SET UTF8MB4
COLLATE UTF8MB4_GENERAL_CI;

GRANT ALL PRIVILEGES ON labdb.*TO human@localhost;
GRANT ALL PRIVILEGES ON labdb.*TO human@"%";
 
FLUSH PRIVILEGES;

USE labdb;

-- now() == currunt_timestamp()

CREATE TABLE tbl_board (
    boardno    INT              NOT NULL AUTO_INCREMENT, -- primary key 를바로 지정가능
    writer  VARCHAR(20)     NOT NULL,
    title  VARCHAR(100)     NOT NULL,
    content  VARCHAR(2000)     NOT NULL,
    writedate  DATETIME    null  DEFAULT NOW(),
    modifydate  DATETIME   null   DEFAULT NOW(),
    readcount  INT  null DEFAULT 0,
    deleted  BOOLEAN null DEFAULT FALSE,
    
	 PRIMARY KEY (boardno)
);

CREATE TABLE tbl_comment (
    commentno    INT              NOT NULL AUTO_INCREMENT,
    boardno  INT     NOT NULL,
    writer  VARCHAR(20)     NOT NULL,
    content  VARCHAR(500)     NOT NULL,
    writedate  DATETIME   null   DEFAULT NOW(),
    modifydate  DATETIME   null   DEFAULT NOW(), -- null 안쓰면 자동으로 null 이고  not null은 작성해야함
    
	 PRIMARY KEY (commentno), -- constraint pk_tbl_comment primary key (commentno)로 사용 가능
	 FOREIGN KEY (boardno) REFERENCES tbl_board (boardno)
);
SHOW TABLES;