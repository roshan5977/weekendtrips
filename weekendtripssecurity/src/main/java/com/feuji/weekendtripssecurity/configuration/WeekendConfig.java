package com.feuji.weekendtripssecurity.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class WeekendConfig {

	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}

}
