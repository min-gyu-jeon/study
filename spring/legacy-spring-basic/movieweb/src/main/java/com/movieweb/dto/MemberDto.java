package com.movieweb.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class MemberDto {

    private String memberId;
    private String passwd;
    private String name;
    private String email;
    private String userType;
    private LocalDateTime regDate;
    private boolean active;

}