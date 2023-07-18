package com.team.cwr.request.model.vo;

import com.team.cwr.member.model.vo.MemberApi;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CodeRequest {
	private int requestNo;
	private int menteeNo;
	private int mentoNo;
	private String status;
	private String title;
	private String content;
	private String saveRoot;
	private String requestDate;
	
	private int reviewCount;
}
