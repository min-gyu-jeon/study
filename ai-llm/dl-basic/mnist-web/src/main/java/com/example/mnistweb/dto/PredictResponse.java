package com.example.mnistweb.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Map;

public record PredictResponse(
        //@JsonProperty : JSON으로 변환할 때 사용할 이름
        @JsonProperty("class_name") String className,
        @JsonProperty("class_id")   int classId,
        @JsonProperty("confidence") double confidence,
        @JsonProperty("all_scores") Map<String, Double> allScores
) {}
