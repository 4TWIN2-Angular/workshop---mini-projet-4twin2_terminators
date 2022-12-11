import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-afficher-list',
  templateUrl: './afficher-list.component.html',
  styleUrls: ['./afficher-list.component.css']
})
export class AfficherListComponent implements OnInit {
  signupform:FormGroup;
  departementsList:any;
  p:number=1;
  constructor(private departementService:DataService) { }

  ngOnInit(): void {
    this.signupform=new FormGroup({
      'nomDepart':new FormControl(null,Validators.required),
      'surface':new FormControl('0',Validators.required),
      'emplacement':new FormControl('AlManar',Validators.required),
      'prix':new FormControl('0',Validators.required)
    })
    this.departementService.getListDepartements().subscribe((res)=>this.departementsList=res);
  }

  OnDepartementDeleted() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'departement supprime',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
