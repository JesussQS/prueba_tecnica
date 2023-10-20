package com.app.ecommerce.Service;

import com.app.ecommerce.Model.Usuario;

public interface UsuarioService {
    
    public Usuario findByEmailAndPassword(String email,String password);
    
}
