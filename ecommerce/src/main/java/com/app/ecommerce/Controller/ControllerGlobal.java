package com.app.ecommerce.Controller;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

import jakarta.servlet.http.HttpSession;

@ControllerAdvice
public class ControllerGlobal {
    
    @ModelAttribute("emailSession")
    public Object emailSession(HttpSession session) {
        return session.getAttribute("email");
    }

    @ModelAttribute("rolSession")
    public Object rolSession(HttpSession session) {
        return session.getAttribute("rol");
    }
}
