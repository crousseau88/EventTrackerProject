package com.skilldistillery.beantracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.beantracker.entities.Beans;

public interface BeanRepository extends JpaRepository<Beans, Integer> {

}
