package com.team.cwr.request.model.vo;

import com.team.cwr.member.model.vo.MemberApi;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CodeReview {
	private int reviewNo;
	private int requestNo;
	private int topReviewNo;
	private int userNo;
	private String content;
	private String reviewDate;

}
