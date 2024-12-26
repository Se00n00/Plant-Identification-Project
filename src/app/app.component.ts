import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { APIServiceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  Data:any
  constructor(private service:APIServiceService){}
  ngOnInit(): void {
      // this.service.getData().subscribe()
  }
  title = 'species-identification';
}
