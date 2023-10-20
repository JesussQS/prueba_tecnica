package com.recorrido.ambiente.Service;

import java.util.List;
import java.util.Optional;

import com.recorrido.ambiente.Model.Ambiente;
import com.recorrido.ambiente.Model.Area;

public interface AmbienteService {
    
    public List<Ambiente> findAll();

    Ambiente save(Ambiente ambiente);

    public Optional<Ambiente> findById(String id);

    List<Ambiente> findByArea(Area area);
}
