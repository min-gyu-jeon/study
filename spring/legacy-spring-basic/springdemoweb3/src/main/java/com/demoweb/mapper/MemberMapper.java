package com.demoweb.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.demoweb.dto.MemberDto;


@Mapper
public interface MemberMapper {
	void insertMember(MemberDto member);

	MemberDto selectByMemberId(@Param("memberId") String memberId); //@Param("memberId") -> mapper.xml에서 ${memberId}에 연결
}
