import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-examportal',
  templateUrl: './examportal.component.html',
  styleUrls: ['./examportal.component.css']
})
export class ExamportalComponent {
   ngonInit() {
    document.body.className = "selector";
     
}

constructor( private login:LoginService, private user: UserService)
{
   
}


public exam={
  q1:'',
   q2:'',
   q3:'',
   q4:'',
   q5:'',
   q6:'',
   q7:'',
   q8:'',

  
}; 
   

  submitQuiz(){
   let  Score=0;
      if  (this.exam.q1=='A')
      {
        Score++;
      }
      if  (this.exam.q2=='B')
      {
       Score++;
      }
      if  (this.exam.q3=='C')
      {
        Score++;
      }
      
      if  (this.exam.q4=='A')
      {
       Score++;
      }
      if  (this.exam.q5=='B')
      {
        Score++;
      }
      if  (this.exam.q6=='C')
      {
        Score++;
      }
      
      if  (this.exam.q7=='A')
      {
        Score++;
      }
      if  (this.exam.q8=='B')
      {
        Score++;
      } 

    this.user.addresult(Score).subscribe((response:any)=>{
       
       console.log(response);
    })
          
       alert( "your current score is  " +Score );
   
      //  this.login.saveMarks(Score).subscribe((response:any)=>{
      //    console.log("done")
      //  });

        
  }
}


