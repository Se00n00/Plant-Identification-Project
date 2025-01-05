import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import { AppdataService } from '../appdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resources',
  imports: [CommonModule, MatTabsModule, MatCardModule, MatChipsModule, MatListModule],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent {
  Data:any
  ResourceData:any =[]
  constructor(private appData:AppdataService){}
  ngOnInit(){
    this.appData.getData().subscribe(data=>{
      this.Data = data
      this.ResourceData = this.Data.dataset.models
      console.log(this.ResourceData)
    })
  }
}
