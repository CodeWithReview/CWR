package com.team.cwr;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/upload")
public class UploadTest {
	
	
	private static final Logger LOGGER = LoggerFactory.getLogger(UploadTest.class);

    /**
    * By default, the public folder in the working directory is a static resource directory, which can be accessed directly by the client.
    */
//    private static final Path PUBLIC_DIR = Paths.get(System.getProperty("user.dir"), "public");
    private static final Path PUBLIC_DIR = Paths.get("C:\\Users\\admin\\Desktop\\testtest");


    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String upload ( @RequestParam("content") String content, 
    						@RequestParam("username") String username, 
    						@RequestPart("file") MultipartFile[] files
    						) throws IOException, ServletException{
    	System.out.println("test=======================================");
    	System.out.println("test======================================="+content);
    	System.out.println("test======================================="+username);
        
    	// Java 10에서 도입된 var는 변수를 선언할 때 타입을 생략할 수 있으며, 컴파일러가 타입을 추론
        for (MultipartFile file : files) {
        	 if (!file.isEmpty()) {
            // 파일 이름은 클라이언트 폴더에 있는 파일의 상대 경로입니다.
            // 클라이언트 경로 구분 기호를 서버 파일 경로 구분 기호로 변환합니다.
            // String fileName = FilenameUtils.separatorsToSystem(part.getSubmittedFileName());
        	String fileName = file.getOriginalFilename();
            System.out.println("fileName========="+ fileName);
            
            // 공용 폴더를 기준으로 파일의 절대 경로를 확인합니다.
            Path filePath = PUBLIC_DIR.resolve(fileName);
            
            // 파일이 있는 폴더를 생성해 보세요.
            if (Files.notExists(filePath.getParent())) {
                Files.createDirectories(filePath.getParent());
            }
            
            //	파일에 데이터 쓰기
            try (var inputStream = file.getInputStream()){
                Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
            }
            
            LOGGER.info("write file: [{}] {}", file.getSize(), filePath);
        	
        	
           
               
//                System.out.println("fileName========="+ fileName);
//                Path filePath = PUBLIC_DIR.resolve(fileName);
//                file.transferTo(filePath.toFile());
//                LOGGER.info("write file: [{}] {}", file.getSize(), filePath);
            }
        	 
        	 
        	 
        	 

        	
        	
        }
        
        
        
        
        
   	 String folderPath = "C:\\Users\\admin\\Desktop\\testtest"; // 폴더 경로를 입력하세요

     List<String> fileList = listFilesAndFolders(folderPath);
     for (String file2 : fileList) {
         System.out.println(file2);
     }
        
        
        
        
        return "ok";
    }
	
    
    public static List<String> listFilesAndFolders(String folderPath) {
        List<String> fileList = new ArrayList<>();

        try {
            Path folder = Paths.get(folderPath);
            if (Files.exists(folder) && Files.isDirectory(folder)) {
                Files.walk(folder)
                        .filter(path -> !Files.isDirectory(path))
                        .forEach(path -> {
                            String fileName = path.getFileName().toString();
                            fileList.add("[파일] ==" + fileName);
                        });
                Files.walk(folder)
                        .filter(Files::isDirectory)
                        .forEach(path -> {
                            String folderName = path.getFileName().toString();
                            fileList.add("[폴더] ==" + folderName);
                        });
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return fileList;
    }


}
