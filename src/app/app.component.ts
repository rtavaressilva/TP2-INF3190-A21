import { Component } from '@angular/core';
//! import { FormControl } from '@angular/forms';
import { BdService } from './bd.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clec-app';
  
  
 
  constructor(private bd: BdService) {
  
 }
  
}
