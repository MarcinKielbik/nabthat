import { Component } from '@angular/core';
import { UsernameService } from '../../services/username.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  menuVisible: boolean = false;

  constructor(private usernameService: UsernameService) {}


  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  addName() {
    this.usernameService.setFullName('Marcin', 'Kiełbik');
  }

  reset() {
    this.usernameService.setFullName('imię', 'nazwisko');
  }

}
