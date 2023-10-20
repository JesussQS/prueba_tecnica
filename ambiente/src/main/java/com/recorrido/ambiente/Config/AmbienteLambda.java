package com.recorrido.ambiente.Config;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.recorrido.ambiente.Model.Ambiente;
import com.recorrido.ambiente.Model.Area;
import com.recorrido.ambiente.Service.AmbienteService;

@Configuration
public class AmbienteLambda {
    
    @Autowired
    private AmbienteService ambienteService;

    @Bean
    public Supplier<List<Ambiente>> listarAmbiente(){
        return() ->{
            return ambienteService.findAll();
        };
    }

    @Bean
    public Function<Map<String,Ambiente>,Map<String,String>> crearAmbiente(){
        return(json) ->{

           Ambiente ambiente= json.get("body");

           Map<String,String> resp= new HashMap<>();

            if(ambiente.getId()!=null){
                if(ambienteService.findById(ambiente.getId().trim()).isPresent()){
                    resp.put("Error", "El id ya existe");
                    return resp;
                }else{
                    try{
                        ambiente.setId(ambiente.getId().toUpperCase());
                        ambienteService.save(ambiente);
                        resp.put("Message", "Solicitud procesada con éxito");
                        return resp;
                    }catch(Exception e) {
                        resp.put("Error", "Algo salio mal en la solicitud");
                        return resp;
                    }
                }
            }else{
                resp.put("Error", "Algo salio mal en la solicitud");
                return resp;
            } 
        };
    }

    @Bean
    public Function<Map<String,Ambiente>,Optional<Ambiente>> buscarAmbiente(){
        return(json) ->{
            Ambiente ambiente=json.get("body");
            return ambienteService.findById(ambiente.getId().toUpperCase());
        };
    }

    @Bean
    public Function<Map<String,Area>,List<Ambiente>> buscarAmbienteArea(){
        return (json) ->{
            Area area= json.get("body");
            return ambienteService.findByArea(area);
        };
    }
    
    @Bean
    public Function<Map<String,Ambiente>,Map<String,String>> actualizarAmbiente(){
        return(json) ->{

            Ambiente ambiente= json.get("body");

            Map<String,String> resp= new HashMap<>();
            
            if(ambiente.getId()!=null){
                if(ambienteService.findById(ambiente.getId().trim()).isPresent()){
                    try{
                        ambiente.setId(ambiente.getId().toUpperCase());
                        ambienteService.save(ambiente);
                        resp.put("Message", "Solicitud procesada con éxito");
                        return resp;
                    }catch(Exception e) {
                        resp.put("Error", "Algo salio mal en la solicitud");
                        return resp;
                    }
                }else{
                    resp.put("Error", "No existe el ambiente");
                    return resp;
                }
            }else{
                resp.put("Error", "Algo salio mal en la solicitud");
                return resp;
            }
            
        };
    } 
}
