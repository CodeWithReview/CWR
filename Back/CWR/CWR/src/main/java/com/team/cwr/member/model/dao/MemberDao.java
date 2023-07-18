package com.team.cwr.member.model.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.team.cwr.member.model.vo.Member;
import com.team.cwr.member.model.vo.MemberApi;

@Repository
public class MemberDao {

	
	@Autowired
	private SqlSessionTemplate sqlSession; // root-context.xml에서 생성해둠
	
	
	// ---------------- select ------------------
	
	// id로 로그인
	public Member loginByID(String userId) {
		return sqlSession.selectOne("memberMapper.loginByID", userId);
	}

	// api로 로그인
	public Member loginByApi(String apiType, String apiKey) {
		Map<String, Object> map = new HashMap<>();
		
		map.put("apiType", apiType);
		map.put("apiKey", apiKey);
		
		return sqlSession.selectOne("memberMapper.loginByID", map);
	}
	
	
	public Member selectMember(int userNo) {
		return sqlSession.selectOne("memberMapper.selectMember", userNo);
	}
	

	// id/nickName 중복확인
	public int checkDuplicates(String type, String content) {
		Map<String, Object> map = new HashMap<>();
		
		map.put("type", type);
		map.put("content", content);
		
		return sqlSession.selectOne("memberMapper.checkDuplicates", map);
	}
	
	// ---------------- insert ------------------
	
	// 멤버 등록
	public int insertMember(Member member, MemberApi memberApi) {
		int result = sqlSession.insert("memberMapper.insertMember", member);
		
		if(result > 0) {
			memberApi.setUserNo(member.getUserNo());
			
			result = insertMemberApi(memberApi);
			
			if(result > 0) {
				if(member.getSkill() != null && member.getSkill().size() > 0) {
					insertMemberSkill(member.getUserNo(), member.getSkill());
				}
				
				return result;
			}else {
				deleteMember(member.getUserNo());
			}
		}
		
		return -1; 
	}

	// 유저가 연동한 api 정보 등록
	public int insertMemberApi(MemberApi memberApi) {
		return sqlSession.insert("memberMapper.insertMemberApi", memberApi);
	}
	
	// 유저별 개발언어 등록 
	public int insertMemberSkill(int userNo, List<String> skillList) {
		Map<String, Object> map = new HashMap<>();
		
		map.put("userNo", userNo);
		map.put("skillList", skillList);
		
		return sqlSession.insert("memberMapper.insertMemberSkill", map);
	}
	// ---------------- update ------------------
	
	
	// 유저 상태 변경
	public int updateMemberStatus(int userNo, String status) {
		Map<String, Object> map = new HashMap<>();
	
		map.put("userNo", userNo);
		map.put("status", status);
		
		return sqlSession.update("memberMapper.updateMemberStatus", map);
	}
	
	
	
	// ---------------- delete ------------------
	
	// 멤버 삭제
	public int deleteMember(int userNo) {
		return sqlSession.delete("memberMapper.deleteMember", userNo);
	}

	// 탈퇴 후 14일 지난 멤버 전체 삭제
	public int deleteDisabledMember() {
		return sqlSession.delete("memberMapper.deleteDisabledMember");
	}
	
	
}
