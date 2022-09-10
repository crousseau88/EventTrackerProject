package com.skilldistillery.beantracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.beantracker.entities.Beans;

public interface BeanRepository extends JpaRepository<Beans, Integer> {

	Beans findById(int id);
	
	List<Beans> findByBrandIgnoreCaseLikeOrGrowingRegionIgnoreCaseLike(String kw1, String kw2);
	

}
