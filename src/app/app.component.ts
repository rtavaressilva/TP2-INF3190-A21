import { Component } from '@angular/core';
import { BdService } from './bd.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clec-app';
  constructor(private bd: BdService, private http: HttpClient) {
  
  }

  ngOnInit() {
    
  }


}
