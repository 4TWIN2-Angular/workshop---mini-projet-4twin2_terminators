import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../service/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    username:'',
    password :'',
  };

  userFormGroup ! :FormGroup
 /* regform = new FormGroup ({
   
    userName : new FormControl("",[  
      Validators.required,
     Validators.pattern("^[0-9]*$")
    ]) ,
    prixTotalDetail : new FormControl("",[  
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]),
    pourcentageRemise : new FormControl("",[  Validators.required,
      Validators.pattern("^[0-9]*$") ] ),
     
    montantRemise :  new FormControl("", [Validators.required,
    Validators.pattern("^[0-9]*$")] ),
   
  });*/
  constructor( private fb:FormBuilder,private auth:AuthenticationServiceService, private router:Router) { }

  ngOnInit(): void {
  /*  this.userFormGroup=this.fb.group({
      userName:this.fb.control("",[Validators.required,Validators.minLength(3)]),
      password:this.fb.control("")
    })*/
   
  }
  formSubmit(){

    //console.log("clicked");

    if(this.loginData.username.trim() == '' || this.loginData.username == null){


    

      return; 
    } if(this.loginData.password.trim() == '' || this.loginData.password == null){



    

      return; 
    }

    this.auth.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("succes");
        console.log(data);

        this.auth.loginUser(data.token);

        this.auth.getCurrentUser().subscribe(
          (user:any)=>{
            this.auth.setUser(user);
           // console.log(user);

            if(this.auth.getUserRole()=='NORMAL'){

          
            }else{
              this.auth.logout();
            }



          }
        )



      },
      (error)=>{
        console.log("Error");
        console.log(error);
      }
    );



  }

}
