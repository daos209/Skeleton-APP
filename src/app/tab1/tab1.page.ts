import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 65fa4f15d17dc10da277c2826533a01c817065bf

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
<<<<<<< HEAD
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
=======
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

>>>>>>> 65fa4f15d17dc10da277c2826533a01c817065bf
}
