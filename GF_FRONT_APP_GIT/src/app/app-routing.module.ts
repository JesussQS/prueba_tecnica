import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'menu-opciones',
    loadChildren: () => import('./menu-opciones/menu-opciones.module').then( m => m.MenuOpcionesPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'recorrido',
    loadChildren: () => import('./recorrido/recorrido.module').then( m => m.RecorridoPageModule),canActivate:[AuthGuard]
  },

  {
    path: 'a-estudios-generales',
    loadChildren: () => import('./a-estudios-generales/a-estudios-generales.module').then( m => m.AEstudiosGeneralesPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'a-especialidades',
    loadChildren: () => import('./a-especialidades/a-especialidades.module').then( m => m.AEspecialidadesPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'a-fia-data',
    loadChildren: () => import('./a-fia-data/a-fia-data.module').then( m => m.AFiaDataPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'a-laboratorios',
    loadChildren: () => import('./a-laboratorios/a-laboratorios.module').then( m => m.ALaboratoriosPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'directorio-carreras',
    loadChildren: () => import('./directorio-carreras/directorio-carreras.module').then( m => m.DirectorioCarrerasPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'busquedad-placa',
    loadChildren: () => import('./busquedad-placa/busquedad-placa.module').then( m => m.BusquedadPlacaPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'directorio-carreras-ambientes/:id',
    loadChildren: () => import('./directorio-carreras-ambientes/directorio-carreras-ambientes.module').then( m => m.DirectorioCarrerasAmbientesPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'detalle-ambiente/:id',
    loadChildren: () => import('./detalle-ambiente/detalle-ambiente.module').then( m => m.DetalleAmbientePageModule),canActivate:[AuthGuard]
  },
  {
    path: 'placa-graduados/:placa',
    loadChildren: () => import('./placa-graduados/placa-graduados.module').then( m => m.PlacaGraduadosPageModule),canActivate:[AuthGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
