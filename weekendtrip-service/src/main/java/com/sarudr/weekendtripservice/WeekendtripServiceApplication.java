package com.sarudr.weekendtripservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class WeekendtripServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(WeekendtripServiceApplication.class, args);
	}

}
