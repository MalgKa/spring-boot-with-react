package pl.projects.springbootwithreact.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

@Entity
@Table(name="contacts")
@Getter
@Setter
@NoArgsConstructor
public class Contact {
    @Id
    @UuidGenerator
    @Column(unique=true, updatable = false)
    private String id;
    private String name;
    private String position;
    private String email;
    private String phone;
    private String status;
    private String photoUrl;
}
