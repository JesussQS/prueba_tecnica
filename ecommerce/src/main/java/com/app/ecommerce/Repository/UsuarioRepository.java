package com.app.ecommerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.ecommerce.Model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario,String> {
    
    Usuario findByEmailAndPassword(String email,String password);

}
