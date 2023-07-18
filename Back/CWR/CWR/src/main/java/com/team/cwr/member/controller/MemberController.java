package com.team.cwr.member.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.team.cwr.member.model.service.MemberService;
import com.team.cwr.member.model.vo.Member;
import com.team.cwr.member.model.vo.MemberApi;

@Controller
@RequestMapping("/member")
public class MemberController {
	
	
	private MemberService memberService;
	private BCryptPasswordEncoder bcryptPasswordEncoder;

	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);

	@Autowired
	public MemberController(MemberService memberService, BCryptPasswordEncoder bcryptPasswordEncoder) {
		this.memberService = memberService;
		this.bcryptPasswordEncoder = bcryptPasswordEncoder;

	}
	
	@ResponseBody
	@PostMapping("/login")
	public String loginMember(@RequestParam(value="userId", required=false) String userId,
							  @RequestParam(value="userPwd", required = false) String userPwd,
							  @RequestParam(value="apiType", required=false) String apiType,
							  @RequestParam(value="apiKey", required=false) String apiKey
							 	) {
		System.out.println("로그인요청 : userId- " +userId +"  :  userPwd- "+userPwd+"  :  apiType- "+apiType+"  :  apiKey- "+apiKey);
		if(userId != null) {
			Member member = memberService.loginByID(userId);
			if(member != null && bcryptPasswordEncoder.matches(userPwd, member.getUserPwd())) {
				if(member.getStatus().equals("disabled")) {
					memberService.updateMemberStatus(member.getUserNo(), "default" );
					member.setStatus("default");
				}
				
				return new Gson().toJson(member);
			}
		} else if(apiType != null) {
			Member member = memberService.loginByApi(apiType, apiKey);
			if(member != null && member.getUserId() != null) {
				return new Gson().toJson(member);
			}
		}
		
		return new Gson().toJson(-1);
	}
	
	
	
	@ResponseBody
	@PostMapping("/checkDuplicates")
	public int checkDuplicates ( @RequestParam(value="type", required=false) String type,
			 					@RequestParam(value="content", required=false) String content) {
		System.out.println("아이디/닉네임 중복확인 :  type  -  "+type + "  content - "+ content);
		if(type != null && content != null) {
			int result = memberService.checkDuplicates(type, content);
			if(result == 0) {
				return 1;
			}
		}
		
		return -1;
	}
	
	
	@ResponseBody
	@PostMapping("/insertMember")
	public int insertMember ( Member member,
								MemberApi memberApi) {
		System.out.println("유저생성요청 :  member  -  "+member);
		System.out.println("유저생성요청 :  skill  -  "+member.getSkill());
		System.out.println("유저생성요청 :  memberApi  -  "+memberApi);
		
		if(member.getUserId() != null && memberApi.getApiType() != null) {
			// 비번 암호화
			member.setUserPwd(bcryptPasswordEncoder.encode(member.getUserPwd()));
			int result = memberService.insertMember(member, memberApi);
			if( result > 0 ) {
				return 1;
			}
		}
		return -1;
	}
	
	
	@ResponseBody
	@PostMapping("/selectMember")
	public String selectMember(@RequestParam(value="userNo", required=false) Integer userNo) {
		System.out.println("유저정보 요청 : userNo- " +userNo );
		if(userNo != null) {
			Member member = memberService.selectMember(userNo);
			if(member != null && member.getUserId() != null) {
				return new Gson().toJson(member);
			}
		}
		
		return new Gson().toJson(-1);
	}
	
	@ResponseBody
	@PostMapping("/insertMemberApi")
	public int insertMemberApi(MemberApi memberApi) {
		System.out.println("유저api 등록요청 : memberApi- " +memberApi );
		if(memberApi != null && memberApi.getApiType() != null) {
			int result = memberService.insertMemberApi(memberApi);
			if(result > 0) {
				return 1;
			}
		}
		
		return -1;
	}

}
