package com.app.ecommerce.Model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Login {

    @NotBlank(message = "No debe dejar el campo vacio")
    @Email(message = "Ingrese un correo valido")
    private String email;

    @NotBlank(message = "No debe dejar el campo vacio")
    private String password;
}
