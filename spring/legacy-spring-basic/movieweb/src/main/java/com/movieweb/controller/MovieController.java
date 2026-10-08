package com.movieweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/movie")
public class MovieController {

    @GetMapping
    public String movieHome() {
        return "redirect:/";
    }

    @GetMapping("/genre/sf")
    public String sf(Model model) {
        setGenre(model, "878", "SF", "Science Fiction",
                "우주 탐험, 인공지능, 시간 여행과 첨단 과학 기술을 소재로 새로운 세계를 보여주는 장르입니다.");
        return "movie/genre-list";
    }

    @GetMapping("/genre/thriller")
    public String thriller(Model model) {
        setGenre(model, "53", "스릴러", "Thriller",
                "추적과 반전, 예측하기 어려운 전개를 통해 관객에게 긴장감과 몰입감을 선사하는 장르입니다.");
        return "movie/genre-list";
    }

    @GetMapping("/genre/comedy")
    public String comedy(Model model) {
        setGenre(model, "35", "코미디", "Comedy",
                "유머와 즐거움을 중심으로 관객에게 웃음과 유쾌한 시간을 선사하는 장르입니다.");
        return "movie/genre-list";
    }

    @GetMapping("/detail")
    public String detail() {
        return "movie/detail";
    }

    private void setGenre(Model model, String id, String name, String englishName, String description) {
        model.addAttribute("genreId", id);
        model.addAttribute("genreName", name);
        model.addAttribute("genreEnglishName", englishName);
        model.addAttribute("genreDescription", description);
    }
}
