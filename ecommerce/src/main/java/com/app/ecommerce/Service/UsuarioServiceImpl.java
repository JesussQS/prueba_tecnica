package com.app.ecommerce.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ecommerce.Model.Usuario;
import com.app.ecommerce.Repository.UsuarioRepository;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public Usuario findByEmailAndPassword(String email, String password) {
        return usuarioRepository.findByEmailAndPassword(email, password);
    }
    
}
