package com.movieweb.mapper;

import org.apache.ibatis.annotations.Param;

import com.movieweb.dto.MemberDto;

public interface MemberMapper {

	void insertMember(MemberDto member);

	MemberDto selectMemberById(@Param("memberId") String memberId);

}