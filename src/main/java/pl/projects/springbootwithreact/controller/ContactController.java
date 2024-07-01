package pl.projects.springbootwithreact.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import pl.projects.springbootwithreact.model.Contact;
import pl.projects.springbootwithreact.service.ContactService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import static pl.projects.springbootwithreact.constant.Constant.PATH_DIRECTORY;

@RequestMapping("/contacts")
@RestController
public class ContactController {
    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping
    public ResponseEntity<Page<Contact>> getContacts(@RequestParam int page, int size) {
        Page<Contact> allContacts = contactService.getAllContacts(page, size);
        return ResponseEntity.ok(allContacts);
    }

    @PostMapping
    public ResponseEntity<Contact> createContact(@RequestBody Contact contact) {
        Contact createdContact = contactService.createContact(contact);
        return ResponseEntity.ok(createdContact);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Contact> getContact(@PathVariable String id) {
        return ResponseEntity.ok(contactService.getContact(id));
    }

    @PutMapping("/photo")
    public ResponseEntity<String> uploadPhoto(@RequestParam String id, @RequestParam MultipartFile photo) {
        return ResponseEntity.ok(contactService.uploadPhoto(id, photo));
    }

    @GetMapping("/photo/{filename}")
    public byte[] getPhoto(@PathVariable String filename) throws IOException {
        return Files.readAllBytes(Paths.get(PATH_DIRECTORY + filename));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteContact(@PathVariable String id) {
        contactService.deleteContact(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/position")
    public ResponseEntity<Page<Contact>> getContactByPosition(@RequestParam int page, @RequestParam int size, @RequestParam String position ) {
        Page<Contact> contactsByPosition = contactService.getContactsByPosition(page, size, position);
        System.out.println(position);
        return ResponseEntity.ok().body(contactsByPosition);
    }
}
