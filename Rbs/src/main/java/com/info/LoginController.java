package com.info;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class LoginController {
	

	Login l;
	
	@Autowired
	LoginService service;
	
	@Autowired
	LoginRepository lrepo;
	
	
	@PostMapping("/register")
	public Login insertData(@RequestBody Login login) {
		Login lg = null;
		int check =0;
		String n = login.getUsername();
		List<Login> users = service.getAllUsers();
		for (Login l : users) {
			 if(l.getUsername().equals(n)) {
				 check = check+1;
			}
		} 
		if(check<1) {
			lg = service.insert(login);
		}
		return lg;
		
	}
	
	@GetMapping("/login/{username}/{password}")
	public Login getUserByName(@PathVariable("username") String username, @PathVariable("password") String password) {
		Login msg=null;
		Login login = lrepo.findUser(username);
		
		if(login!=null) {
			if(login.getUsername().equals(username)&& login.getPassword().equals(password)) {
				msg = login;
			} 
		}
		return msg;

     }
}
