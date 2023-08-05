package com.feuji.weekendtripssecurity.authentication;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
 
	private String firstname;
	private String lastname;
	private String email;
	private String password;
	private String role;
	private String status;
	private Long mobileNumber;
	private String gender;
	private int age;
	
}
