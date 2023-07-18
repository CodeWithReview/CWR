package com.team.cwr.member.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.cwr.member.model.dao.MemberDao;
import com.team.cwr.member.model.vo.Member;
import com.team.cwr.member.model.vo.MemberApi;


@Service
public class MemberServiceImpl implements MemberService  {

	@Autowired
	private MemberDao memberDao;
	
	// ---------------- select ------------------
	
	@Override
	public Member loginByID(String userId) {
		return memberDao.loginByID( userId );
	}

	@Override
	public Member loginByApi(String apiType, String apiKey) {
		return memberDao.loginByApi( apiType, apiKey );
	}


	@Override
	public Member selectMember(int userNo) {
		return memberDao.selectMember( userNo );
	}
	
	
	@Override
	public int checkDuplicates(String type, String content) {
		return memberDao.checkDuplicates( type, content );
	}
	
	// ---------------- insert ------------------
	
	@Override
	public int insertMember( Member member, MemberApi memberApi) {
		return memberDao.insertMember( member , memberApi );
	}

	@Override
	public int insertMemberApi(MemberApi memberApi) {
		return memberDao.insertMemberApi( memberApi );
	}


	
	
	// ---------------- update ------------------
	
	
	@Override
	public int updateMemberStatus(int userNo, String status) {
		return memberDao.updateMemberStatus( userNo , status );
	}



	
	// ---------------- delete ------------------
}
