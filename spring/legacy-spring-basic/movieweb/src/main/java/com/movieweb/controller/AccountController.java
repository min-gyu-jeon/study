package com.movieweb.controller;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.movieweb.dto.MemberDto;
import com.movieweb.service.MemberService;

import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/account")
public class AccountController {

	private final MemberService memberService;

	public AccountController(MemberService memberService) {
		this.memberService = memberService;
	}

	@GetMapping("/register")
	public String registerForm() {
		return "account/register";
	}

	@PostMapping("/register")
	public String register(MemberDto member) {
		try {
			memberService.register(member);
		} catch (DuplicateKeyException e) {
			return "redirect:/account/register?error=duplicate";
		}

		return "redirect:/account/login";
	}

	@GetMapping("/login")
	public String loginForm() {
		return "account/login";
	}

	@PostMapping("/login")
	public String login(
			@RequestParam("memberId") String memberId,
			@RequestParam("passwd") String passwd,
			HttpSession session) {

		MemberDto member = memberService.login(memberId, passwd);

		if (member == null) {
			return "redirect:/account/login";
		}

		session.setAttribute("loginuser", member);
		return "redirect:/";
	}

	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/home";
	}
}
