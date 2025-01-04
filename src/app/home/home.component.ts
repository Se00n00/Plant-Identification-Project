import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { AppdataService } from '../appdata.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatTabsModule, MatProgressBarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Data:any;
  HomeData:any = [];
  index:number = 0;
  CurrentData:any;
  progressValue = 0;

  constructor(private appdata:AppdataService){}
  ngOnInit(){
    this.appdata.getData().subscribe(data=>{
      this.Data = data;
      this.HomeData = this.Data.home.features;
      this.CurrentData = this.HomeData[this.index];
      console.log(this.HomeData);

      setInterval(()=>{
        this.progressValue = ((this.index + 1) / this.HomeData.length) * 100;
        this.index = (this.index+1)%this.HomeData.length;
        this.CurrentData = this.HomeData[this.index];
      },5000)
    })
  }
}
