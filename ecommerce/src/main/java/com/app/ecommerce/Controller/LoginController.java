package com.app.ecommerce.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.app.ecommerce.Model.Login;
import com.app.ecommerce.Model.Usuario;
import com.app.ecommerce.Service.UsuarioService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;


@Controller
@RequestMapping("/acceder")
public class LoginController {

    @Autowired
    UsuarioService usuarioService;

    @GetMapping("")
    public String acceder(Map<String,Object> model,HttpSession session){
        if(session.getAttribute("email")!=null){
            return "redirect:/";
        }else{
            Login login=new Login();
            model.put("login", login);
            return "home/ingresar";
        }
    }

    @PostMapping("")
    public String ingresar(Map<String,Object> model,@Valid Login login,BindingResult bindingResult,HttpSession session){
        if(bindingResult.hasErrors()){
            model.put("login", login);
            return "home/ingresar";
        }else{
            Usuario usuario=usuarioService.findByEmailAndPassword(login.getEmail(),login.getPassword());
            if(usuario!=null){
                session.setAttribute("email", usuario.getEmail());
                session.setAttribute("rol", usuario.getRol());
                return "redirect:/";
            }else{
                model.put("login", login);
                model.put("error", "Email o contraseña incorrecta");
                return "home/ingresar";
            }
        }
    }

    @GetMapping("/salir")
    public String salir(HttpSession session){
        session.removeAttribute("email");
        session.removeAttribute("rol");
        return "redirect:/";
    }
}



