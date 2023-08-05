package com.feuji.weekendtripssecurity;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class WeekendtripssecurityApplication {

	public static void main(String[] args) {
		SpringApplication.run(WeekendtripssecurityApplication.class, args);
	}

}
