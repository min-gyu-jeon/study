package com.movieweb.service;

import org.springframework.stereotype.Service;

import com.movieweb.dto.MemberDto;
import com.movieweb.mapper.MemberMapper;

@Service
public class MemberService {

	private final MemberMapper memberMapper;

	public MemberService(MemberMapper memberMapper) {
		this.memberMapper = memberMapper;
	}

	
	// 회원가입
	public void register(MemberDto member) {
		
		memberMapper.insertMember(member);
		
	}

	
	// 로그인
	public MemberDto login(String memberId, String passwd) {

		MemberDto member =
				memberMapper.selectMemberById(memberId);

		// 아이디가 존재하지 않는 경우
		if (member == null) {
			return null;
		}

		// 정지된 회원
		if (!member.isActive()) {
			return null;
		}

		// 비밀번호가 다른 경우
		if (!member.getPasswd().equals(passwd)) {
			return null;
		}

		return member;
	}

}