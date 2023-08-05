package com.feuji.weekendtripssecurity.authentication;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ResetPassword {

	private int id;
	private String oldPassword;
	private String newPassword;

}
