package com.team.cwr.member.model.service;

import com.team.cwr.member.model.vo.Member;
import com.team.cwr.member.model.vo.MemberApi;

public interface MemberService {
	
	// ---------------- select ------------------
	
	Member loginByID(String userId);
	Member loginByApi(String apiType, String apiKey);
	Member selectMember(int userNo);
	
	int checkDuplicates(String type, String content);
	
	// ---------------- insert ------------------
	
	int insertMember(Member member, MemberApi memberApi);
	int insertMemberApi(MemberApi memberApi);
	
	// ---------------- update ------------------
	
	int updateMemberStatus(int userNo, String status);
	
	// ---------------- delete ------------------
}
