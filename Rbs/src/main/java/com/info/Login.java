package com.info;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Login {
	
	@Id
	private int uid;
	private String fname;
	private String lname;
	private String mobile_no;
	private String username;
	private String password;
	
	
	
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getMobile_no() {
		return mobile_no;
	}
	public void setMobile_no(String mobile_no) {
		this.mobile_no = mobile_no;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public Login() {
		
	}
	public Login(int uid, String fname, String lname, String mobile_no, String username, String password) {
		super();
		this.uid = uid;
		this.fname = fname;
		this.lname = lname;
		this.mobile_no = mobile_no;
		this.username = username;
		this.password = password;
	}
	@Override
	public String toString() {
		return "Login [uid=" + uid + ", fname=" + fname + ", lname=" + lname + ", mobile_no=" + mobile_no
				+ ", username=" + username + ", password=" + password + "]";
	}
	
	
	
	
	

}
