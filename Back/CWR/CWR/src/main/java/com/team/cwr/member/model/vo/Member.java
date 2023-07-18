package com.team.cwr.member.model.vo;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Member {
	private int userNo;
	private String userId;
	private String userPwd;
	private String nickName;
	private String profileImg;
	private String userInfo;
	private String status;
	private String mento;
	private String mentoDate;
	private String disabledDate;
	private String enrollDate;
	
	private List<String> skill;


}
