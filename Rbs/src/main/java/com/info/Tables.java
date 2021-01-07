package com.info;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Tables {
	@Id
	private int tNo;
	private int capacity;
	public Tables() {
		
	}
	public int gettNo() {
		return tNo;
	}
	public void settNo(int tNo) {
		this.tNo = tNo;
	}
	public int getCapacity() {
		return capacity;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	public Tables(int tNo, int capacity) {
		super();
		this.tNo = tNo;
		this.capacity = capacity;
	}
	@Override
	public String toString() {
		return "Tables [tNo=" + tNo + ", capacity=" + capacity + "]";
	}
	
}
