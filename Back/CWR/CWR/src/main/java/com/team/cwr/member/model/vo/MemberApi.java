package com.team.cwr.member.model.vo;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MemberApi {
	private int userNo;
	private String apiType;
	private String apiKey;
	private String apiId;
}
