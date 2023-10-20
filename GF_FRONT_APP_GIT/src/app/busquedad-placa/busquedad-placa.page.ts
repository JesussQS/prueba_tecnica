import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Placa } from '../model/Placa';
import { MasterServiceService } from '../master.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busquedad-placa',
  templateUrl: './busquedad-placa.page.html',
  styleUrls: ['./busquedad-placa.page.scss'],
})
export class BusquedadPlacaPage implements OnInit {

  anio?: string;
  alertaExistencia: boolean=false;
  alertaFormato: boolean=false;

  constructor(private alertController: AlertController, private service:MasterServiceService,private router: Router) {}

  ngOnInit(){

  }

  async buscarPlaca(){
    if(this.anio?.trim()){
      let anio:number=parseInt(this.anio!.substring(0,4));
      let semestre:number=parseInt(this.anio!.substring(5,7));
      const formato = /^\d{4}-\d{2}$/;

      if(anio>=1990 && anio<=2017 && semestre>0 && semestre<3 && formato.test(this.anio.trim())){
        let placa :Placa=new Placa();
        placa.id=this.anio;
        this.service.buscarPlaca(placa).subscribe(
          res =>{
            this.verificarExistencia(res);
          }
        );
      }else{
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Formato incorrecto',
          buttons: ['OK']
        });
        await alert.present();
      }
    }else{
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El campo es obligatorio',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  async verificarExistencia(placa: Placa){
    if(!placa){
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Placa en construccion :(',
        buttons: ['OK']
      });
      await alert.present();
    }else{
      this.router.navigate(['/placa-graduados',placa.id]);
    }
  }
}
