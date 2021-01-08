package com.info;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BookingRepo extends JpaRepository<Booking,Integer> {

@Query(value="select * from Booking where USER_NAME = ?1", nativeQuery = true)

 List<Booking> getBooking(String username);

	

}
