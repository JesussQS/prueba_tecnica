package com.previene.laboratorio.Repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.previene.laboratorio.Model.Cita;
import com.previene.laboratorio.Model.Paciente;

public interface CitaRepository extends JpaRepository<Cita, Integer>{
    
    List<Cita> findAll();

    Cita findById(int id_cita);

    List<Cita> findByPaciente(Paciente paciente);

    void deleteById(int id_cita);

    List<Cita> findByFecha(Date fecha);

    @Query(value = "select c.dni_pac,CONCAT(p.nombres, ' ', p.apellidos) as paciente,count(c.dni_pac) as nCitas from citas c,pacientes p where c.dni_pac=p.dni_pac group by dni_pac order by  count(p.dni_pac) desc", nativeQuery = true)
    List<Object[]> pacientesPorCitas();
}
