package com.movieweb.controller;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.Set;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tmdb")
public class TmdbController {

    private static final String TMDB_API = "https://api.themoviedb.org/3";
    private static final Set<String> ALLOWED_GENRES = Set.of("878", "53", "35");

    private final HttpClient httpClient = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(10))
            .build();

    @GetMapping(value = "/discover", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> discover(@RequestParam("genre") String genre) {
        if (!ALLOWED_GENRES.contains(genre)) {
            return jsonError(400, "지원하지 않는 장르입니다.");
        }

        String url = TMDB_API
                + "/discover/movie?with_genres=" + genre
                + "&sort_by=popularity.desc&language=ko-KR&page=1";
        return requestTmdb(url);
    }

    @GetMapping(value = "/movie/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> movie(@PathVariable("id") long id) {
        if (id <= 0) {
            return jsonError(400, "잘못된 영화 번호입니다.");
        }

        return requestTmdb(TMDB_API + "/movie/" + id + "?language=ko-KR");
    }

    private ResponseEntity<String> requestTmdb(String url) {
        String accessToken = getAccessToken();
        if (accessToken == null) {
            return jsonError(503, "TMDB_ACCESS_TOKEN 설정이 필요합니다.");
        }

        HttpRequest request = HttpRequest.newBuilder(URI.create(url))
                .timeout(Duration.ofSeconds(15))
                .header("Accept", "application/json")
                .header("Authorization", "Bearer " + accessToken)
                .GET()
                .build();

        try {
            HttpResponse<String> response = httpClient.send(
                    request, HttpResponse.BodyHandlers.ofString());

            return ResponseEntity.status(response.statusCode())
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(response.body());
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return jsonError(502, "TMDB 요청이 중단되었습니다.");
        } catch (IOException e) {
            return jsonError(502, "TMDB 서버에 연결할 수 없습니다.");
        }
    }

    private String getAccessToken() {
        String token = System.getProperty("tmdb.access.token");
        if (token == null || token.isBlank()) {
            token = System.getenv("TMDB_ACCESS_TOKEN");
        }
        return token == null || token.isBlank() ? null : token.trim();
    }

    private ResponseEntity<String> jsonError(int status, String message) {
        String escaped = message.replace("\\", "\\\\").replace("\"", "\\\"");
        return ResponseEntity.status(status)
                .contentType(MediaType.APPLICATION_JSON)
                .body("{\"message\":\"" + escaped + "\"}");
    }
}
