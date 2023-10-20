import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa el servicio Router
import { AlertController } from '@ionic/angular';
import { Visitante } from '../model/Visitante';
import { MasterServiceService } from '../master.service.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {
  visitante?: Visitante;
  password: string='password';
  c: number=0;
  alerta:boolean=false;
  mostrarExistencia:boolean=false;
  ver=false;
  noVer=true;

  constructor(
    private router: Router, // Inyecta el servicio Router
    private service: MasterServiceService
  ) {}

  ngOnInit(){
    this.visitante=new Visitante();
  }

  mostrar(){
      if(this.c%2===0){
        this.password='text';
        this.ver=true;
        this.noVer=false;


      }else{
        this.password='password';
        this.ver=false;
        this.noVer=true;
      }
      this.c++;
  }

  ingresar(){
    if(!this.visitante?.email?.trim() || !this.visitante?.password?.trim()){
      this.alerta=true;
      return;
    }else{
      this.alerta=false;
      this.service.ingresar(this.visitante).subscribe(
        (res:any)=>{
          if(res.Error==null){
            this.service.setToken(res.IdToken);
            this.router.navigate(['/menu-opciones']);
          }else{
            this.mostrarExistencia=true;
            return;
          }
        }
      );
    }

  }

  registrarRoute(){
    this.router.navigate(['/registro-usuario']).then(() => {
      window.location.reload();
    });
  }

}
