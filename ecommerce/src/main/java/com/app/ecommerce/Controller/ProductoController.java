package com.app.ecommerce.Controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/producto")
public class ProductoController {
    
    @GetMapping("listar")
    public String listarProducto(Map<String,Object> model,HttpSession session){
        if(session.getAttribute("email")!=null){
            if(session.getAttribute("rol").equals("Admin")){
                model.put("email", session.getAttribute("email"));
                model.put("rol", session.getAttribute("rol"));
                return "producto/listar";
            }else{
                return "redirect:/acceder";
            }
        }else{
            return "redirect:/acceder";
        }
    }
}
