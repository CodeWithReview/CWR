package com.team.cwr.common;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

import javax.servlet.ServletContext;

import org.apache.commons.io.IOUtils;
import org.springframework.stereotype.Component;

@Component
public class FileContentReader {

	private final ServletContext servletContext;

	public FileContentReader(ServletContext servletContext) {
		this.servletContext = servletContext;
	}

	public String readFileContent(String filePath) throws IOException {
		try (InputStream inputStream = servletContext.getResourceAsStream(filePath)) {
			return IOUtils.toString(inputStream, StandardCharsets.UTF_8);
		}
	}
}
