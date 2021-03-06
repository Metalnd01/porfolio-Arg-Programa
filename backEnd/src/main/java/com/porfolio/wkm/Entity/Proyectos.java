package com.porfolio.wkm.Entity;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Proyectos implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idProy;
    
    private String imagenProy;
    private String tituloProy;
    private String descripcionProy;
    private String urlProy;

    public Proyectos() {
    }

    public Proyectos(Long idProy, String imagenProy, String tituloProy, String descripcionProy, String urlProy) {
        this.idProy = idProy;
        this.imagenProy = imagenProy;
        this.tituloProy = tituloProy;
        this.descripcionProy = descripcionProy;
        this.urlProy = urlProy;
    }
    
    
}

