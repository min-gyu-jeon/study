package com.demoweb.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.mariadb.jdbc.Driver;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.demoweb.dto.MemberDto;

@Repository("memberDao")	//@component의 별칭 - DAO클래스에 적용
public class MemberDaoImpl implements MemberDao {
	
	private SqlSessionTemplate sqlSessionTemplate;
	public MemberDaoImpl(SqlSessionTemplate sqlSessionTemplate) {
		this.sqlSessionTemplate = sqlSessionTemplate;
	}
	
	private final String MEMBER_MAPPER = "com.demoweb.mapper.MemberMapper";

	@Override
	public void insertMember(MemberDto member) {
		
		// /com/demoweb/mapper/MemberMapper.xml파일에 정의된 insertMember를 실행하는 명령
		sqlSessionTemplate.insert(MEMBER_MAPPER + ".insertMember",member);
		
	}
	
	@Override
	public MemberDto selectByMemberId(String memberId) {

		// /com/demoweb/mapper/MemberMapper.xml파일에 정의된 selectByMemberId를 실행하는 명령
		MemberDto member = sqlSessionTemplate.selectOne(MEMBER_MAPPER + ".selectByMemberId", memberId);

	    return member;
	}
	

}
