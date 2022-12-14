import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from '../models/Etudiant';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {
etudiant:any
idE:any;  
  constructor(private dataService:DataService,private ac:ActivatedRoute) { }

  GetEtudiantById(id:number) {
    this.etudiant = this.dataService.getEtudiant(id); 
    
        
            console.log("Etudiant :" , this.etudiant)
        }
  ngOnInit(): void {
    /*route parametre */
    this.idE = this.ac.snapshot.params['id']
    this.GetEtudiantById(this.idE);
       console.log(this.idE) ;  
       
  }
  updateEtudiant(){
    this.dataService.updateEtudiant(this.etudiant).subscribe();

  }

}
