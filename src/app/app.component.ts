import { Component, Pipe, PipeTransform } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppdataService } from './appdata.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'species-identification';
  Data:any
  FooterData:any;
  constructor(private appdata: AppdataService) {}
  ngOnInit() {
    this.appdata.getData().subscribe((data) => {
      console.log(data);
      this.Data = data;
      this.FooterData = this.Data.home.downloadOption[0]
      console.log(this.FooterData)
    });
  }
  originalOrder = () => 0;
  changeDownloadType(index:number){
    this.FooterData = this.Data.home.downloadOption[index]
  }
}