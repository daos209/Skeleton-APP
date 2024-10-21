import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private navCtrl: NavController) {}

  navigateToLogin() {
    this.navCtrl.navigateForward('/login'); // Asegúrate de que la ruta sea correcta
  }
}
