package com.info;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
	
	@Autowired
	LoginRepository repo;
	
	public List<Login> getAllUsers() {
		List<Login> lg = repo.findAll();
		return lg;
	}
	
	public Login insert(Login login) {
		return repo.save(login);
	}
}
