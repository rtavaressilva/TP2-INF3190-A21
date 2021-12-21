import { Component, OnInit } from '@angular/core';
import * as listeEcoles from '../../assets/data/ecoles.json';

interface listeEcoles {
  ecole: string;
  code: number;
}

@Component({
  selector: 'app-ecoles',
  templateUrl: './ecoles.component.html',
  styleUrls: ['./ecoles.component.css']
})
export class EcolesComponent implements OnInit {

  ecoles: any = (listeEcoles as any).default;
  colones: string[] = ['école', 'code'];

  constructor() {
    console.log(this.ecoles);
    
   }

  ngOnInit(): void {
  }

}
