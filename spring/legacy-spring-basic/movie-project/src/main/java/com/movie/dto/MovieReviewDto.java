package com.movie.dto;

import lombok.Data;

@Data
public class MovieReviewDto {
	private int boardId;
	private String title;
	private String movieName;
	private String writer;
	private String category;
	private String content;
}
