import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../services/username.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  firstName: string = 'imię';
  lastName: string = 'nazwisko';

  constructor(private usernameService: UsernameService) {}

  ngOnInit() {
    this.usernameService.firstName$.subscribe(name => this.firstName = name);
    this.usernameService.lastName$.subscribe(name => this.lastName = name);
  }
}
