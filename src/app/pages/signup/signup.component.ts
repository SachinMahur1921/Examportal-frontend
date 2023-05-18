import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  
  constructor(private userService: UserService,private snackbar:MatSnackBar){
    
  }
  ngOnInit(): void {}
   
  public user={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    useremail:'',
    phone:'',
    confirmpassword:'',
   
  };
    formsubmit()
    {
        
      if(this.user.username=='' || this.user.username==null)
      {
    Swal.fire('Username is required !!','ok')
        
        return;
      }

      if(this.user.password=='' || this.user.password==null )
      {
           Swal.fire("password requred")
          
      }
         
      if(this.user.password!= this.user.confirmpassword )
      {
           Swal.fire('Password does not match','ok')
            
           return;
      }
      this.userService.addUser(this.user).subscribe((data) =>{
       
        Swal.fire("user added successfully")
           
      } , error =>{
        Swal.fire("somthing went wrong ",'please try again with the different username');
      });
      }
  // addUser:userService
  
}
