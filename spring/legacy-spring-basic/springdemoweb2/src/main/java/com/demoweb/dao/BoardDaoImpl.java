package com.demoweb.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.demoweb.dto.BoardDto;

@Repository("boardDao")
public class BoardDaoImpl implements BoardDao {

	private SqlSessionTemplate sqlSessionTemplate;

	public BoardDaoImpl(SqlSessionTemplate sqlSessionTemplate) {
		this.sqlSessionTemplate = sqlSessionTemplate;
	}

	private final String BOARD_MAPPER = "com.demoweb.mapper.BoardMapper";

	@Override
	public void insertBoard(BoardDto board) {

		sqlSessionTemplate.insert(BOARD_MAPPER + ".insertBoard",board);
	}

	@Override
	public List<BoardDto> selectAllBoard() {

		return sqlSessionTemplate.selectList(BOARD_MAPPER + ".selectAllBoard");
	}

	@Override
	public BoardDto selectBoardByBoardNo(int boardNo) {

		return sqlSessionTemplate.selectOne(BOARD_MAPPER + ".selectBoardByBoardNo",boardNo);
	}
}