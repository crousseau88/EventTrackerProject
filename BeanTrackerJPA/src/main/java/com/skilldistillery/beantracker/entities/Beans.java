package com.skilldistillery.beantracker.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class Beans {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;
	
	private String brand;
	
	private String type;
	
	private String process;
	
	@Column(name= "growing_region")
	private String growingRegion;
	
	@Column(name= "growing_altitude")
	private String growingAltitude;
	
	@Column(name= "blend_base")
	private String blendBase;
	
	@Column(name= "roast_level")
	private String roastLevel;
	
	@Column(name = "buy_again")
	private boolean buyAgain;
	
	public Beans() {
		super();
	}

	private Double rating;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getProcess() {
		return process;
	}

	public void setProcess(String process) {
		this.process = process;
	}

	public String getGrowingRegion() {
		return growingRegion;
	}

	public void setGrowingRegion(String growingRegion) {
		this.growingRegion = growingRegion;
	}

	public String getGrowingAltitude() {
		return growingAltitude;
	}

	public void setGrowingAltitude(String growingAltitude) {
		this.growingAltitude = growingAltitude;
	}

	public String getBlendBase() {
		return blendBase;
	}

	public void setBlendBase(String blendBase) {
		this.blendBase = blendBase;
	}

	public String getRoastLevel() {
		return roastLevel;
	}

	public void setRoastLevel(String roastLevel) {
		this.roastLevel = roastLevel;
	}

	public boolean isBuyAgain() {
		return buyAgain;
	}

	public void setBuyAgain(boolean buyAgain) {
		this.buyAgain = buyAgain;
	}

	public Double getRating() {
		return rating;
	}

	public void setRating(Double rating) {
		this.rating = rating;
	}

	@Override
	public String toString() {
		return "Beans [id=" + id + ", name=" + name + ", brand=" + brand + ", type=" + type + ", process=" + process
				+ ", growingRegion=" + growingRegion + ", growingAltitude=" + growingAltitude + ", blendBase="
				+ blendBase + ", roastLevel=" + roastLevel + ", buyAgain=" + buyAgain + ", rating=" + rating + "]";
	}
	
	
	
}
