import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Area } from './model/Area';
import { Ambiente } from './model/Ambiente';
import { Visitante } from './model/Visitante';
import { Storage } from '@ionic/storage-angular';
import { Placa } from './model/Placa';
import { Graduado } from './model/Graduado';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  rutaGlobalAmbiente = 'https://ah0hguyfib.execute-api.us-east-2.amazonaws.com/proMobile/ambiente/';
  rutaGlobalArea = 'https://ah0hguyfib.execute-api.us-east-2.amazonaws.com/proMobile/area/';
  rutaGlobalAturizador='https://ah0hguyfib.execute-api.us-east-2.amazonaws.com/proMobile/autorizacion/';
  rutaGlobalGradudo='https://ah0hguyfib.execute-api.us-east-2.amazonaws.com/proMobile/graduado/';
  rutaGlobalPlaca='https://ah0hguyfib.execute-api.us-east-2.amazonaws.com/proMobile/placa/';


  constructor(private http: HttpClient,private storage: Storage) { }

  GetArea() {
    return this.http.get<Area[]>(this.rutaGlobalArea + "listar");
  }

  GetAmbiente() {
    return this.http.get<Ambiente[]>(this.rutaGlobalAmbiente + "listar");
  }

  BuscarAmbienteArea(id:any){
    return this.http.post<Ambiente[]>(this.rutaGlobalAmbiente +"buscar-por-area", id);
  }

  BuscarAmbiente(id:any){
    return this.http.post<Ambiente>(this.rutaGlobalAmbiente + "buscar",id);
  }

  ingresar(visitante: Visitante){
    return this.http.post(this.rutaGlobalAturizador + "ingresar",visitante);
  }

  registrar(visitante: Visitante){
    return this.http.post(this.rutaGlobalAturizador + "registrar",visitante);
  }

  buscar(visitante: Visitante){
    return this.http.post<Visitante>(this.rutaGlobalAturizador + "buscar",visitante);
  }

  setToken(idToken: string){
    localStorage.setItem("token",idToken);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  buscarPlaca(placa :Placa){
    return this.http.post<Placa>(this.rutaGlobalPlaca + "buscar",placa);
  }

  buscarGraduadosPlaca(placa:Placa){
    return this.http.post<Graduado[]>(this.rutaGlobalGradudo + "buscar-graduados-placa",placa);
  }

}
