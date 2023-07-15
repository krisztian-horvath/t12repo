import { Component } from '@angular/core';

@Component({
  selector: 'app-vizsgafeladat',
  templateUrl: './vizsgafeladat.component.html',
  styleUrls: ['./vizsgafeladat.component.css']
})
export class VizsgafeladatComponent {
  sulyErtek:number=1;
  magassagErtek:number=1;

  eredmenyek:string[]=[];
  EredmenyMentes():void {
    this.eredmenyek.push("A " + this.sulyErtek + " kg testsúlyú és " + this.magassagErtek + " m magasságú ember testtömegindexe: " + this.sulyErtek/(this.magassagErtek*this.magassagErtek));
  }

}
