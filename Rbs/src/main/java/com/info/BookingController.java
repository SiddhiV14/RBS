package com.info;


import java.util.List;

import javax.websocket.server.PathParam;

import java.util.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BookingController {
	
	@Autowired
	BookingService service;
	
	@Autowired
	BookingRepo br;
	 @PostMapping("/booking")
     public Booking addUser(@RequestBody Booking book)
     {
    	 return service.addUser(book);
	
      
     }
	
	
	
}
