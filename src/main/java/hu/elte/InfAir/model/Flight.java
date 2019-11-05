package hu.elte.InfAir.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

import static com.fasterxml.jackson.annotation.JsonProperty.Access.WRITE_ONLY;
import java.time.LocalDateTime;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Flight {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(nullable = false)
    private String startpoint;
    
    
    @Column(nullable = false)
    private String endpoint;
    
    @Column
    @CreationTimestamp
    private LocalDateTime launch;
    
    @Column
    @CreationTimestamp
    private LocalDateTime arrival;
    
    @Column
    private Integer cost;
    
    @Column
    private Float sale;
}
