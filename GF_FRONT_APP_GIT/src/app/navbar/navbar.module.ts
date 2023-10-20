// navbar.module.ts
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component'; // Ajusta la ruta según tu proyecto
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    IonicModule
  ],
  exports: [NavbarComponent], // Exporta el componente para que otros módulos lo puedan usar
})
export class NavbarModule {}
