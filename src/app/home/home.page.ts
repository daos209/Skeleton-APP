import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements AfterViewInit {

  name: string = '';
  surname: string = '';
  educationLevel: string = '';
  birthdate: string = '';

  constructor(
    private route: ActivatedRoute,
    private animationCtrl: AnimationController,
    private alertController: AlertController
  ) {
    this.route.queryParams.subscribe(params => {
      this.name = params['username'];
    });
  }

  ngAfterViewInit() {
    // Aquí puedes inicializar animaciones u otras configuraciones
  }

  clearInputs() {
    this.animateInput('name');
    this.animateInput('surname');
    this.name = '';
    this.surname = '';
    this.educationLevel = '';
    this.birthdate = '';
  }

  async showInfo() {
    const alert = await this.alertController.create({
      header: 'Información del Usuario',
      message: `Nombre: ${this.name}<br>Apellido: ${this.surname}`,
      buttons: ['OK']
    });
    await alert.present();
  }

  animateInput(inputName: string) {
    const element = document.querySelector(`ion-input[name="${inputName}"]`);

    // Comprueba que el elemento es un Element antes de animar
    if (element instanceof HTMLElement) {
      const animation = this.animationCtrl.create()
        .addElement(element)
        .duration(1000)
        .fromTo('transform', 'translateX(0)', 'translateX(20px)')
        .fromTo('opacity', '1', '0.5')
        .fromTo('transform', 'translateX(20px)', 'translateX(0)')
        .fromTo('opacity', '0.5', '1');
        
      animation.play();
    } else {
      console.warn(`Elemento no encontrado: ${inputName}`);
    }
  }
}
