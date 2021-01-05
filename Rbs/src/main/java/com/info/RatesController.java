package com.info;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RatesController {
	
	@Autowired
	RatesService service;
	
	@RequestMapping("/rates")
	public List<Rates> getAllRates() {
		List<Rates> rates = service.getRates();
		return rates;
	}

}
