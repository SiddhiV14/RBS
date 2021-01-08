package com.info;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class FeebackController {

	@Autowired
	FeedbackService service;

    @PostMapping("/feedback")
    public String insertData(@RequestBody Feedback feedback) {
    	service.insert(feedback);
        return "Data inserted";    
    }
}
