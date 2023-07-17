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

</script>


</body>


</html>
