package com.mobile.visitante.Model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Visitante {

    String dni;
    String nombres;
    String apePaterno;
    String apeMaterno;
    String email;
    String password;
    String celular;
    String ocupacion;
}
