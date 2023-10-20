package com.app.ecommerce.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@Entity
@Table(name = "Usuario")
public class Usuario {

    @Id
    @Size(min = 8,max = 8)
    private String dni;

    @NotBlank
    @NotNull
    private String nombres;

    @NotBlank
    @NotNull
    private String apePaterno;

    @NotBlank
    @NotNull
    private String apeMaterno;

    @NotNull
    @Past
    private LocalDate fechaNac;

    @NotBlank
    @NotNull
    private String genero;

    @NotBlank
    @NotNull
    @Size(min = 9, max = 9)
    private String celular;

    @NotBlank
    @NotNull
    @Email
    private String email;

    @NotBlank
    @NotNull
    private String password;

    private String rol;
}
