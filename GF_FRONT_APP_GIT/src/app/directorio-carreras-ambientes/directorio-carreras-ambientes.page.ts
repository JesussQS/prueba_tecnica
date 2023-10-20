import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from '../master.service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ambiente } from '../model/Ambiente';


@Component({
  selector: 'app-directorio-carreras-ambientes',
  templateUrl: './directorio-carreras-ambientes.page.html',
  styleUrls: ['./directorio-carreras-ambientes.page.scss'],
})
export class DirectorioCarrerasAmbientesPage implements OnInit {

  ambientes: Ambiente[]=[];

  constructor(private route: ActivatedRoute,
    private service: MasterServiceService,
    private router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params: any) => {
      const parametro = {
        id: params.get("id")
      };
      this.service.BuscarAmbienteArea(parametro).subscribe(
        res =>{
          this.ambientes=res;
        }
      )
      console.log(parametro);
    });

  }

  buscarAmbiente(id?: string) {
    this.router.navigate(['/detalle-ambiente',id]);
  }

}
