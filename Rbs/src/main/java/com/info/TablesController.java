package com.info;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TablesController {
	@Autowired
	TablesService service;
	@Autowired
	TablesRepo repo;

	
	 @GetMapping("/b/{bookedDate}/{slotTime}")
	 public List<Tables> getAvaliableTable(@PathVariable String bookedDate, @PathVariable String slotTime)  {
		// return repo.checkAvaliablity(new SimpleDateFormat("yyyy-MM-dd").parse(bookedDate), slotTime);
		 return repo.checkAvaliablity(bookedDate, slotTime);
	 }

}
