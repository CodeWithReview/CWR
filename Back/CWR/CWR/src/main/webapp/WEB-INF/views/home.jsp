<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page session="false" %>

<%
	String path = request.getContextPath();
%>

<html>
<head>
	<title>Home</title>
   <!-- jquery  -->
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
</head>
<body>
<h1>
	Hello world!  
</h1>

<P>  The time on the server is ${serverTime}. </P>


	
	<input type="file"  id="file" name="file" multiple webkitdirectory/>
	<button id="test-btn">button</button>
	
	<button id="test-btn1">login</button> <br>
	<button id="test-btn2">checkDuplicates</button><br>
	<button id="test-btn3">insertMember</button><br>
	<button id="test-btn4">selectMember</button><br>
	<button id="test-btn5">insertMemberApi</button><br>
	



<script type="text/javascript">
var input= document.getElementById("file");

input.addEventListener('change', (e) => {
	console.log(input.files);
});

document.getElementById("test-btn").addEventListener("click", ()=>{
	var formData = new FormData();
	console.log(input.files);
	formData.append("content","testcontent");
	formData.append("username","testusername");
	for (var file of input.files) {
		formData.append('file', file);
	  }
	
<%-- 	$.ajax({
	    url: '<%= path%>/upload',
	    dataType: 'multipart/form-data', //form data 설정
	    method: 'POST',
	    processData: false, //프로세스 데이터 설정 : false 값을 해야 form data로 인식합니다
	    contentType: false, //헤더의 Content-Type을 설정 : false 값을 해야 form data로 인식합니다
	    data: formData,
	    success: function (result) {
	    	console.log("성공");
	    },
	    error: function (request) {
	      console.log('에러발생');
	      console.log(request.status);
	    },
	  }); --%>
	  
	  $.ajax({
		    url: '<%= path%>/upload',
		    dataType: 'multipart/form-data', //form data 설정
		    method: 'POST',
		    processData: false, //프로세스 데이터 설정 : false 값을 해야 form data로 인식합니다
		    contentType: false, //헤더의 Content-Type을 설정 : false 값을 해야 form data로 인식합니다
		    data: formData,
		    success: function (result) {
		    	console.log("성공");
		    },
		    error: function (request) {
		      console.log('에러발생');
		      console.log(request.status);
		    },
		  });

});


document.getElementById("test-btn1").addEventListener("click", ()=>{
	var data1 = {
					userId : "userId22",
					userPwd : "userPwd22"
				};
	var data2 = {
			apiType : "apiType22",
			apiKey : "apiKey22"
		};
	  $.ajax({
		    url: '<%= path%>/member/login',
		    dataType: 'JSON',
		    method: 'POST',
		    data: data1,
		    success: function (result) {
		    	console.log( "login   : " ,result);
		    },
		    error: function (request) {
		      console.log('에러발생');
		      console.log(request.status);
		    },
		  });
	
});
document.getElementById("test-btn2").addEventListener("click", ()=>{


	$.ajax({
	    url: '<%= path%>/member/checkDuplicates',
	    dataType: 'JSON',
	    method: 'POST',
	    data: {
	    	type : "nickName",
			content : "nickName22"
	    },
	    success: function (result) {
	    	console.log( "checkDuplicates   : " ,result, "  ", typeof result);
	    },
	    error: function (request) {
	      console.log('에러발생');
	      console.log(request.status);
	    },
	  });
	
	
});
document.getElementById("test-btn3").addEventListener("click", ()=>{
	var data1 = {
			userId : "userId22",
			userPwd : "userPwd22",
			nickName : "nickName22",
			// profileImg : string,
			userInfo : "userInfo111",
			mento : "Y",
			apiKey : "apiKey22",
			apiType : "google",
			apiId : "apiId1",
			skill : ["Java", "Javascript", "Typescript"]
		};

	$.ajax({
	    url: '<%= path%>/member/insertMember',
	    dataType: 'JSON',
	    method: 'POST',
	    data: data1,
	    success: function (result) {
	    	console.log( "insertMember   : " ,result, "  ", typeof result);
	    },
	    error: function (request) {
	      console.log('에러발생');
	      console.log(request.status);
	    },
	  });
	
});
document.getElementById("test-btn4").addEventListener("click", ()=>{

	$.ajax({
	    url: '<%= path%>/member/selectMember',
	    dataType: 'JSON',
	    method: 'POST',
	    data: {userNo : 1} ,
	    success: function (result) {
	    	console.log( "selectMember   : " ,result);
	    },
	    error: function (request) {
	      console.log('에러발생');
	      console.log(request.status);
	    },
	  });
	
});
document.getElementById("test-btn5").addEventListener("click", ()=>{
	
	var data1 = {
			userNo  : 1,
			apiKey : "apiKey33",
			apiType : "github",
			apiId : "apiId3"
		};

	$.ajax({
	    url: '<%= path%>/member/insertMemberApi',
	    dataType: 'JSON',
	    method: 'POST',
	    data: data1,
	    success: function (result) {
	    	console.log( "insertMember   : " ,result, "  ", typeof result);
	    },
	    error: function (request) {
	      console.log('에러발생');
	      console.log(request.status);
	    },
	  });
	
	
});

</script>


</body>


</html>
