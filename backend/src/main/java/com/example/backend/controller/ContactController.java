package com.example.backend.controller;

import com.example.backend.model.Contact;
import com.example.backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/sub")
    public String submitContactForm(@RequestBody Contact contact) {
        contactService.saveContact(contact);
        return "Contact form submitted successfully!";
    }
}
