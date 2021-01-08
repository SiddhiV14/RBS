package com.info;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TablesRepo extends JpaRepository<Tables, Integer> {
	@Query(value="select * from tables where t_no not in(select distinct table_no from booking where RESERVATION_DATE= ?1 and SLOT_TIME= ?2)",nativeQuery=true)
	public List<Tables> checkAvaliablity( String bookedDate,String slotTime);

}
