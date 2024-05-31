package pl.projects.springbootwithreact.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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
    @PostMapping("/contacts")
    public ResponseEntity<Contact> createContact(@RequestBody Contact contact){
        Contact createdContact = contactService.createContact(contact);
        return ResponseEntity.ok(createdContact);
    }
    @GetMapping("/contacts/{id}")
    public ResponseEntity<Contact> getContact(@PathVariable String id){
        return ResponseEntity.ok(contactService.getContact(id));
    }
}
