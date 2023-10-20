package com.previene.laboratorio.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.previene.laboratorio.Model.Cita;
import com.previene.laboratorio.Model.Resultado;

public interface ResultadoRepository extends JpaRepository<Resultado, Long> {
    
    List<Resultado> findByCita(Cita cita);
    
    void deleteByCita(Cita cita);

    Resultado findById(int id);

    @Query(value = "select r.id_area,a.descripcion,count(r.id_area) as nCitas from resultados r,areas a,citas c where r.id_area=a.id_area and r.id_cita=c.id_cita and DATE_FORMAT(c.fecha, '%Y-%m')=:mes group by id_area order by count(r.id_area) desc ", nativeQuery = true)
    List<Object[]> cantidadAreasMes(@Param("mes") String mes);

    @Query(value = "select r.id_area,a.descripcion,sum(r.subTotal) as nCitas from resultados r,areas a,citas c where r.id_area=a.id_area and r.id_cita=c.id_cita and DATE_FORMAT(c.fecha, '%Y-%m')=:mes group by id_area order by sum(r.subTotal) desc", nativeQuery = true)
    List<Object[]> ingresoAreasMes(@Param("mes") String mes);
}
