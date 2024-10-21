import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private navCtrl: NavController) {}

  // Puedo agregar más métodos según sea necesario

  // Método para navegar hacia otra página
  navigateToHome() {
    this.navCtrl.navigateForward('/login'); // Reemplazar con la ruta que desee
  }
}
