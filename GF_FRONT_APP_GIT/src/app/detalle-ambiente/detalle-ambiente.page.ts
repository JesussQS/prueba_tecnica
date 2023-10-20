import { Component, OnInit } from '@angular/core';
import { Ambiente } from '../model/Ambiente';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterServiceService } from '../master.service.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-detalle-ambiente',
  templateUrl: './detalle-ambiente.page.html',
  styleUrls: ['./detalle-ambiente.page.scss'],
})
export class DetalleAmbientePage implements OnInit {

  ambiente: Ambiente=new Ambiente;
  constructor(private route: ActivatedRoute,
    private service: MasterServiceService,
    private router: Router) {
    }

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      const parametro = {
        id: params.get("id")
      };
      this.service.BuscarAmbiente(parametro).subscribe(
        res =>{
          this.ambiente=res;
        }
      )
      console.log(parametro);
    });

  }

}
