package com.team.cwr;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FilenameUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.team.cwr.common.FileContentReader;

@RestController
@RequestMapping("/upload")
public class UploadTest {
	
	
	@Autowired
    ServletContext servletContext;
	
	@Autowired
	FileContentReader reader;
	
	
	private static final Logger LOGGER = LoggerFactory.getLogger(UploadTest.class);

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String upload ( 
    						@RequestParam("content") String content, 
    						@RequestParam("username") String username, 
    						@RequestPart("file") MultipartFile[] files,
    						HttpServletRequest request
    						) throws IOException, ServletException{
    	System.out.println("test======================================="+files.length);
    	System.out.println("test======================================="+content);
    	System.out.println("test======================================="+username);
    	
    	String parentFolder ="";
    	String realPath = servletContext.getRealPath("/resources/files/code");
    	String today = new SimpleDateFormat("yyMMddHHmmss").format(new Date()) + ( (int) Math.random() * 1000 + 1 );
    	String saveFolder = realPath + File.separator + today;
        
        Path savePath = Paths.get(saveFolder);
          
    	// Java 10에서 도입된 var는 변수를 선언할 때 타입을 생략할 수 있으며, 컴파일러가 타입을 추론
        for (MultipartFile file : files) {
        	 if (!file.isEmpty()) {            
	        	String fileName = file.getOriginalFilename();
	        	
	        	if(parentFolder.length() <= 0) {
	            	Path path = Paths.get(fileName);
	                if (fileName != null) {
	                    Path parent = path.getParent();
	                    if (parent != null) {
	                    	// 파일의 상위 경로를 가져옴 (플랫폼에 맞게 변환됨) 클라이언트 경로 구분 기호를 서버 파일 경로 구분 기호로 변환합니다.
	                    	parentFolder = FilenameUtils.separatorsToSystem(parent.toString()).split("/")[0];
	                    	System.out.println("parentFolder========="+ parentFolder);
	                    }
	                }
	        	}
	            System.out.println("fileName========="+ fileName);
	            
	            // 공용 폴더를 기준으로 파일의 절대 경로를 확인합니다.
	            Path filePath = savePath.resolve(fileName);
	            
	            // 파일이 있는 폴더를 생성해 보세요.
	            if (Files.notExists(filePath.getParent())) {
	                Files.createDirectories(filePath.getParent());
	            }
	            
	            //	파일에 데이터 쓰기
	            try (var inputStream = file.getInputStream()){
	                Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
	            }
	            
	            LOGGER.info("write file: [{}] {}", file.getSize(), filePath);

            }
        	 
        }	 

   	 String folderPath = saveFolder + File.separator + parentFolder; // 폴더 경로를 입력하세요

   	 Map<String, List<String>> map = listFilesAndFolders(folderPath);
   	 //folderPath +  File.separator + map.get("fileList").get(0))
   	 LOGGER.info("file content : {}", reader.readFileContent("resources\\files\\code\\2307172228281\\new\\test.html"));
   	 
        
        return "ok";
    }
	
    
    public Map<String, List<String>> listFilesAndFolders(String folderPath) {
    	List<String> fileList = new ArrayList<>();
    	List<String> folderList = new ArrayList<>();
    	File dir = new File(folderPath);

    	File files[] = dir.listFiles();
    	for (File file : files) {
    		Path path = Paths.get(file.toString());
    		if(!Files.isDirectory(path)) {
    			System.out.println("파일 : " + file.getName());
    			fileList.add(file.getName());
    		}else {
    			System.out.println("폴더 : " + file.getName());
    			folderList.add(file.getName());
    		}
    	}
    	
    	Map<String, List<String>> map = new HashMap<>();
    	
    	map.put("fileList", fileList);
    	map.put("folderList", folderList);

        return map;
    }
    

}
