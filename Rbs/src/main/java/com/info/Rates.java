package com.info;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Rates {
	
	@Id
	private int rid;
	private String type;
	private String lunch1;
	private String lunch2;
	private String dinner1;
	private String dinner2;
	public int getRid() {
		return rid;
	}
	public void setRid(int rid) {
		this.rid = rid;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getLunch1() {
		return lunch1;
	}
	public void setLunch1(String lunch1) {
		this.lunch1 = lunch1;
	}
	public String getLunch2() {
		return lunch2;
	}
	public void setLunch2(String lunch2) {
		this.lunch2 = lunch2;
	}
	public String getDinner1() {
		return dinner1;
	}
	public void setDinner1(String dinner1) {
		this.dinner1 = dinner1;
	}
	public String getDinner2() {
		return dinner2;
	}
	public void setDinner2(String dinner2) {
		this.dinner2 = dinner2;
	}
	
	public Rates() {
		
	}
	public Rates(int rid, String type, String lunch1, String lunch2, String dinner1, String dinner2) {
		super();
		this.rid = rid;
		this.type = type;
		this.lunch1 = lunch1;
		this.lunch2 = lunch2;
		this.dinner1 = dinner1;
		this.dinner2 = dinner2;
	}
	@Override
	public String toString() {
		return "Rates [rid=" + rid + ", type=" + type + ", lunch1=" + lunch1 + ", lunch2=" + lunch2 + ", dinner1="
				+ dinner1 + ", dinner2=" + dinner2 + "]";
	}
	
	

}
