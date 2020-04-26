package com.example.college;

import java.util.ArrayList;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/college")
public class CController {

    @Autowired
    CRepository cRepository;

    @PostConstruct
    private void set() {
        final College c1 = new College();
        c1.setName("University of Rzeszow");
        c1.setCountry("Poland");
        c1.setCity("Rzeszow");
        c1.setFoundationYear(2001);
        c1.setNumberOfStudents(16300);
        c1.setRector("prof. dr hab. Sylwester Czopek");
        c1.setType("University");
        this.cRepository.save(c1);

        final College c2 = new College();
        c2.setName("Warsaw University of Technology");
        c2.setCountry("Poland");
        c2.setCity("Warsaw");
        c2.setFoundationYear(1915);
        c2.setNumberOfStudents(30000);
        c2.setRector("prof. dr hab. Jan Szmidt");
        c2.setType("Polytechnic");
        this.cRepository.save(c2);
    }

    @GetMapping
    private ArrayList<College> getAllItems() {
        return (ArrayList<College>) this.cRepository.findAll();
    }

    @GetMapping("/{id}")
    private Optional<College> getItem(@PathVariable Long id) {
        return this.cRepository.findById(id);
    }

    @PostMapping
    private College addItem(@RequestBody College college) {
        return this.cRepository.save(college);
    }

    @PutMapping("/put/{id}")
    private College replaceEmployee(@RequestBody College newCollege, @PathVariable Long id) {
  
      return cRepository.findById(id)
        .map(college -> {
          college.setName(newCollege.getName());
          college.setCountry(newCollege.getCountry());
          college.setCity(newCollege.getCity());
          college.setRector(newCollege.getRector());
          college.setType(newCollege.getType());
          college.setNumberOfStudents(newCollege.getNumberOfStudents());
          college.setFoundationYear(newCollege.getFoundationYear());
          return cRepository.save(college);
        })
        .orElseGet(() -> {
            newCollege.setId(id);
            return cRepository.save(newCollege);
        });
    }

    @DeleteMapping("/delete/{id}")
    private void deleteItem(@PathVariable long id) {
        this.cRepository.deleteById(id);
    }

}
