import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from '../models/equipe';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
 equipe = new Equipe();
 data:any;
 res:any;
  constructor(private router:Router, private dataService:DataService, private Route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  addEquipe(f:any){
    console.log(this.equipe);
    
    this.dataService.addEquipe(this.equipe).subscribe(res => {
      this.data = res});
  }
}
