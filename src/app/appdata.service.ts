import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class AppdataService {

  constructor(private htttp:HttpClient) { }
  getData(){
    return this.htttp.get('files/main.json');
  }
}
