package com.feuji.weekendtripssecurity.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration implements WebMvcConfigurer {

	private final JwtAuthenticationFilter jwtAuthFilter;
	private final AuthenticationProvider authenticationProvider;

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable().authorizeHttpRequests()
				.antMatchers("security/auth/register", "security/auth/authenticate", "security/weekend/test",
						"security/auth/getuserarray", "security/auth/getallusers")
				.permitAll().and().authorizeHttpRequests()
				.antMatchers("security/auth/changestatusofuserbyEmail/{useremail}",
						"security/weekend/changestatusofcity/{id}")
				.authenticated().and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
				.authenticationProvider(authenticationProvider)
				.addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

		return http.build();
	}

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("*").allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS").allowedHeaders("*")
				.allowedOrigins("http://localhost:4200/");
		WebMvcConfigurer.super.addCorsMappings(registry);
	}
}
