import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  name: string = '';
  surname: string = '';
  educationLevel: string = '';
  birthdate: string = '';

  constructor(private route: ActivatedRoute, private animationCtrl: AnimationController) {
    this.route.queryParams.subscribe(params => {
      this.name = params['username'];
    });
  }

  clearInputs() {
    this.animateInput('name');
    this.animateInput('surname');
    this.name = '';
    this.surname = '';
    this.educationLevel = '';
    this.birthdate = '';
  }

  showInfo() {
    // Mostrar información usando un alert
  }

  animateInput(inputName: string) {
    // Aquí puedes implementar la animación
  }
}
