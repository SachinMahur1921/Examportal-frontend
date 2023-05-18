import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  public flag: any;
  loginData={
    useremail: '',
    password: ''

  };
  
   useremail:any;
   token:any
   role:any

  constructor(private login:LoginService,private router:Router ,private http:HttpClient)
  { }

  ngOnInit(): void {}
      
  
  formSubmit(){
    console.log(' submitted');
    
    
     if(this.loginData.useremail.trim()==""||this.loginData.useremail==null )
     {
        Swal.fire('usernameRequired', "please provise a user ")
        return;
     }
    
        
     this.login.isLogin(this.loginData.useremail, this.loginData.password).subscribe((response:any )=> {

        console.log(response);
       if(response)
       {
             console.log("response")
        this.token=response;
        localStorage.setItem("token",JSON.stringify(this.token));
           
            this.login.getrole().subscribe((response:any)=>{
            
             console.log(response)
              if(response=="USER")
              { 
                console.log("hii")
                this.router.navigate(['/examportal']);
              }
              if(response=="ADMIN")
              {
                this.router.navigate(['/admin']);
              }
            },(error)=>{
              console.log(error.error)
            })
       } 
        
    },(error)=>{
       Swal.fire("username/password does not match");
    })
 
        
    //    let flag=true;
    //  console.log(this.loginData.username);
    //    flag=  this.login.isLogin(this.loginData.username,this.loginData.password)
        
    //    if(flag==true){
    //         console.log("hello");
           
    //    }
      
              
            
         
      //  this.router.navigate(['/signup'])

  }
  }

