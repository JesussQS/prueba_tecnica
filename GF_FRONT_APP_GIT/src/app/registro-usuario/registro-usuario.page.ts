import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MasterServiceService } from '../master.service.service';
import { Visitante } from '../model/Visitante';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage {

  visitante?: Visitante;
  alertaDni: boolean=false;
  alertaNombres: boolean=false;
  alertaApePat: boolean=false;
  alertaApeMat: boolean=false;
  alertaEmail: boolean=false;
  alertaPassword: boolean=false;
  alertaCelular: boolean=false;
  alertaOcupacion: boolean=false;
  formato: boolean=false;
  emailExistencia=false;
  ver=false;
  noVer=true;
  password: string='password';
  c: number=0;

  constructor(
    private router: Router,
    private service: MasterServiceService
  ) {}

  ngOnInit(){
    this.visitante=new Visitante();
  }

  registrar(){
    const emailV = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!this.visitante?.dni?.trim() || this.visitante.dni.trim().length!=8  || !this.visitante.nombres?.trim() || !this.visitante.dni?.trim() || !this.visitante.apePaterno?.trim() || !this.visitante.apeMaterno?.trim() || !this.visitante.email?.trim() || !emailV.test(this.visitante.email.trim()) || !this.visitante.password?.trim() || !this.visitante.celular?.trim() || this.visitante.celular.trim().length!=9 || !this.visitante.ocupacion?.trim()){

      this.alertaDni=!this.visitante?.dni?.trim();
      if(this.visitante?.dni?.trim().length!=8){
        this.alertaDni=true;
      }
      this.alertaNombres=!this.visitante?.nombres?.trim();
      this.alertaApePat=!this.visitante?.apePaterno?.trim();
      this.alertaApeMat=!this.visitante?.apeMaterno?.trim();
      this.alertaEmail=!this.visitante?.email?.trim();
      if(this.visitante?.email?.trim()){
        this.formato=!emailV.test(this.visitante.email.trim());
      }
      this.alertaPassword=!this.visitante?.password?.trim();
      this.alertaCelular=!this.visitante?.celular?.trim();
      if(this.visitante?.celular?.trim().length!=9){
        this.alertaCelular=true;
      }
      this.alertaOcupacion=!this.visitante?.ocupacion?.trim();
    }else{
      this.alertaDni=false;
      this.alertaNombres=false;
      this.alertaApePat=false;
      this.alertaApeMat=false;
      this.alertaEmail=false;
      this.alertaPassword=false;
      this.alertaCelular=false;
      this.alertaOcupacion=false;
      this.formato=false;

      this.service.registrar(this.visitante).subscribe(
        (res:any) =>{
          if(res.Error){
            this.emailExistencia=true;
          }else{
            this.emailExistencia=false;
            this.router.navigate(['/inicio-sesion']);
          }
        }
      )
    }
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
}
