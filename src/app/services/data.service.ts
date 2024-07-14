import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataUrl: string = 'assets/data.json';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }
}
