package com.info;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedbackService {

	@Autowired
	FeedbackRepository repo;
	

	public Feedback insert(Feedback feedback) {
		
		 return repo.save(feedback);
	}

	
}
