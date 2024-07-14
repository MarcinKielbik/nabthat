import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  private firstNameSource = new BehaviorSubject<string>('imię');
  private lastNameSource = new BehaviorSubject<string>('nazwisko');

  firstName$ = this.firstNameSource.asObservable();
  lastName$ = this.lastNameSource.asObservable();

  setFirstName(name: string) {
    this.firstNameSource.next(name);
  }

  setLastName(name: string) {
    this.lastNameSource.next(name);
  }

  setFullName(firstName: string, lastName: string) {
    this.firstNameSource.next(firstName);
    this.lastNameSource.next(lastName);
  }
}
