package com.github.javapuzzle.service.openaiclient.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Entityutil {

	@Value("${environment}")
	private String environment;

	@Value("${dev-url}")
	private String devUrl;

	@Value("${prod-url}")
	private String prodUrl;

	public static String getUrl() {

		Entityutil util = new Entityutil();

		if (util.environment.equals("dev")) {

			return util.devUrl;
		} else {
			return util.prodUrl;
		}

	}
}