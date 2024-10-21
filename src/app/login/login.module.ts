import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule // Asegúrate de que este módulo de enrutamiento esté configurado correctamente
  ],
  declarations: [LoginPage] // Declara el componente LoginPage
})
export class LoginPageModule {}
