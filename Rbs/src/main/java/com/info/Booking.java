package com.info;

import java.sql.Date;



import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;

@Entity
public class Booking {
	@Id
	private int bookingId;
	private String UserName;
	private String guestMobileNumber ;
	@Transient
	private String bookedDate ;
	private String reservationDate ;
	private String slotTime;
	private int noOfGuests;
	private int tableNo;
	

public Booking() {
	
}


public int getBookingId() {
	return bookingId;
}


public void setBookingId(int bookingId) {
	this.bookingId = bookingId;
}


public String getGuestName() {
	return UserName;
}


public void setGuestName(String UserName) {
	this.UserName = UserName;
}


public String getGuestMobileNumber() {
	return guestMobileNumber;
}


public void setGuestMobileNumber(String guestMobileNumber) {
	this.guestMobileNumber = guestMobileNumber;
}


public String getBookedDate() {
	return bookedDate;
}


public void setBookedDate(String bookedDate) {
	this.bookedDate = bookedDate;
}


public String getReservationDate() {
	return reservationDate;
}


public void setReservationDate(String reservationDate) {
	this.reservationDate = reservationDate;
}


public String getSlotTime() {
	return slotTime;
}


public void setSlotTime(String slotTime) {
	this.slotTime = slotTime;
}


public int getNoOfGuests() {
	return noOfGuests;
}


public void setNoOfGuests(int noOfGuests) {
	this.noOfGuests = noOfGuests;
}


public int getTableNo() {
	return tableNo;
}


public void setTableNo(int tableNo) {
	this.tableNo = tableNo;
}


public Booking(int bookingId, String UserName, String guestMobileNumber, String bookedDate, String reservationDate,
		String slotTime, int noOfGuests, int tableNo) {
	super();
	this.bookingId = bookingId;
	this.UserName = UserName;
	this.guestMobileNumber = guestMobileNumber;
	this.bookedDate = bookedDate;
	this.reservationDate = reservationDate;
	this.slotTime = slotTime;
	this.noOfGuests = noOfGuests;
	this.tableNo = tableNo;
}


@Override
public String toString() {
	return "Booking [bookingId=" + bookingId + ", UserName=" + UserName + ", guestMobileNumber=" + guestMobileNumber
			+ ", bookedDate=" + bookedDate + ", reservationDate=" + reservationDate + ", slotTime=" + slotTime
			+ ", noOfGuests=" + noOfGuests + ", tableNo=" + tableNo + "]";
}



}
