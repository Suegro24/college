package com.example.college;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity

public class College {
    @Id
    @GeneratedValue

    private long id;
    private String name;
    private String country;
    private String city;
    private String rector;
    private String type;
    private int numberOfStudents;
    private int foundationYear;

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCountry() {
        return country;
    }

    public String getCity() {
        return city;
    }

    public String getRector() {
        return rector;
    }

    public String getType() {
        return type;
    }

    public int getNumberOfStudents() {
        return numberOfStudents;
    }

    public int getFoundationYear() {
        return foundationYear;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setRector(String rector) {
        this.rector = rector;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setNumberOfStudents(int numberOfStudents) {
        this.numberOfStudents = numberOfStudents;
    }

    public void setFoundationYear(int foundationYear) {
        this.foundationYear = foundationYear;
    }
} 