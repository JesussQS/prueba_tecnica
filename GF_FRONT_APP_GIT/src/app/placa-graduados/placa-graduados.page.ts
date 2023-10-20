import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from '../master.service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Placa } from '../model/Placa';
import { Graduado } from '../model/Graduado';


@Component({
  selector: 'app-placa-graduados',
  templateUrl: './placa-graduados.page.html',
  styleUrls: ['./placa-graduados.page.scss'],
})
export class PlacaGraduadosPage implements OnInit {

  placa?: Placa;
  graduados?: Graduado[];

  constructor(
    private route: ActivatedRoute,
    private service: MasterServiceService,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: any) =>{
        let placa:Placa=new Placa();
        placa.id=params.get('placa');

        this.service.buscarPlaca(placa).subscribe(
          res =>{
            this.placa=res;
          }
        );

        this.service.buscarGraduadosPlaca(placa).subscribe(
          res =>{
            this.graduados=res;
          }
        );

      }
    );
  }

  regresar(){
    this.router.navigate(['/busquedad-placa']).then(() => {
      window.location.reload();
    });
  }
}
