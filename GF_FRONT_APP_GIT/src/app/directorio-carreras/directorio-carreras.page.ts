import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from '../master.service.service';
import { Area } from '../model/Area';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directorio-carreras',
  templateUrl: './directorio-carreras.page.html',
  styleUrls: ['./directorio-carreras.page.scss'],
})
export class DirectorioCarrerasPage implements OnInit {

  areas: Area[]=[];


  constructor(private service: MasterServiceService, private router: Router) { }

  ngOnInit() {
    this.service.GetArea().subscribe(res =>{
      this.areas = res;
    });
  }

  editAmbiente(id?: number) {
    this.router.navigate(['/directorio-carreras-ambientes',id]);
  }

}
