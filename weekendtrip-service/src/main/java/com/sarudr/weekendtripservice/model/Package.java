package com.sarudr.weekendtripservice.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "packages")
public class Package implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long packageId;

	private String packageName;

	private String packageCategory;

	private Double packagePrice;

	private String packageStatus;

	private String pImageUrl;

	private String packageDescription;

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "cityIdRef")
	@JsonBackReference
	private City city;

	@OneToMany(mappedBy = "packages", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JsonManagedReference
	private List<Place> places;

}