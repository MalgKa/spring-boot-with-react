package pl.projects.springbootwithreact.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import pl.projects.springbootwithreact.model.Contact;
import pl.projects.springbootwithreact.service.ContactService;

@RestController
public class ContactController {
    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }
    @GetMapping("/contacts")
    public ResponseEntity<Page<Contact>> getContacts(@RequestParam int page, int size){
        Page<Contact> allContacts = contactService.getAllContacts(page, size);
        return ResponseEntity.ok(allContacts);
    }
}
