import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterServiceService } from '../master.service.service';

@Component({
  selector: 'app-menu-opciones',
  templateUrl: './menu-opciones.page.html',
  styleUrls: ['./menu-opciones.page.scss'],
})
export class MenuOpcionesPage implements OnInit {

  constructor(
    private router: Router,
    private service: MasterServiceService
  ) { }

  ngOnInit() {
  }

  cerrarSesion(){
    this.service.deleteToken();
    this.router.navigate(['/inicio-sesion']).then(() => {
      window.location.reload();
    });
  }

}
