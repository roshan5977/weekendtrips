package com.feuji.weekendtripssecurity.service;

import java.util.List;
import java.util.Optional;

import com.feuji.weekendtripssecurity.authentication.ResetPassword;
import com.feuji.weekendtripssecurity.user.User;

public interface UserService {

	Optional<User> findbyEmail(String email);

	List<User> getAllUsers();

	User getById(Integer id);

	User updateUser(Integer id, User userDto);

	Optional<User> changeStatusByEmail(String email);

	Optional<User> changeStatusById(Integer id);

	User changePassword(ResetPassword resetPassword);

	User saveUser(User userDto);
}
