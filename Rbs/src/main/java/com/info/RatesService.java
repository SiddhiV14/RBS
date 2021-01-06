package com.info;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RatesService {
	
	@Autowired
	RatesRepository repo;
	
	public List<Rates> getRates() {
		List<Rates> rates = repo.findAll();
		return rates;
	}

}
