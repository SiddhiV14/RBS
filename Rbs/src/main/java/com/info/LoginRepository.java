package com.info;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LoginRepository extends JpaRepository<Login, Integer> {
	
	@Query(value="select * from login where username = ?1", nativeQuery = true)
	Login findUser(String username);

}
