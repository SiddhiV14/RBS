package com.info;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {
	@Autowired
	BookingRepo repo;
	
	
	public Booking addUser(Booking book) {
    	Optional<Booking> u1 = repo.findById(book.getBookingId());
    	if(u1.isPresent()) {
    	return null;
    	}
    	repo.save(book);
    	return book;
    	}
	
	

}
