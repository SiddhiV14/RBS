package com.info;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	

	private String username;
	private int rating;
	private String review;
	
	public Feedback() {
		
	}
	
	

	public Feedback(int id, String username, int rating, String review) {
		super();
		this.id = id;
	
		this.username = username;
		this.rating = rating;
		this.review = review;
	}



	@Override
	public String toString() {
		return "Feedback [id=" + id + ", username=" + username + ", rating=" + rating
				+ ", review=" + review + "]";
	}



	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}
	
	
}
