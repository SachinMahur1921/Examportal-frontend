import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {


    Subject={
      subjectName:""
    }
    constructor( private admin:AdminService)
    {

    }
  students: any[] =[];
  subjects: any[] =[];
  cards = [{ first: "username" ,second:"email", third:"phone" ,fourth:"password"}];
  
  currentCard: number = 1;
    
   Student=[{username:"", email:" ",phone:"",password:" "}, { username: 'Jane', email: 'jane@example.com', phone: '456-789-0123', password: 'password2' }, { username: 'Jane', email: 'jane@example.com', phone: '456-789-0123', password: 'password2' }, { username: 'Jane', email: 'jane@example.com', phone: '456-789-0123', password: 'password2' }, { username: 'Jane', email: 'jane@example.com', phone: '456-789-0123', password: 'password2' }, { username: 'Jane', email: 'jane@example.com', phone: '456-789-0123', password: 'password2' }, { username: 'Jane', email: 'jane@example.com', phone: '456-789-0123', password: 'password2' }, { username: 'Jane', email: 'jane@example.com', phone: '456-789-0123', password: 'password2' }]
    
     results:any[]=[];
  Showcard(cardNumber: number) {
    this.currentCard = cardNumber; 
      
     this.admin.getDetails().subscribe((response:any)=>{
       this.students= response;
       

     }, (error)=>{
       
       console.log('Something went wrong');

       
     })
  }
  Showcard1(cardNumber: number) {
    this.currentCard = cardNumber; 
      
     this.admin.getSubject().subscribe((response:any)=>{
       this.subjects= response;
       console.log(response);
       

     }, (error)=>{
       
       console.log('Something went wrong');

       
     })
  }

  deleteStudent(student:any)
  {
     this.admin.delete(student).subscribe((response:any)=>{
       
        alert("delete successfully")
     })
  }

  deleteSubject(card:any)
  {
    this.admin.deleteSubjects(card).subscribe((response:any)=>{
       
      alert("delete successfully")
   })
  }

  isFormVisible: any;

  showForm() { 
    
      this.isFormVisible = true;
    
  }

  AddSubject()
  {
    this.admin.addSubject(this.Subject).subscribe((response:any)=>{
      
       alert("user Added Succcsesfully");

    })
  }
 
  setData:number=1;
  set(set:any)
  {
    this.setData=set;
  } 

   result=[{
     first:"Student", Second:"Attempt", Third:"TotalMarks"
   }] 

   Showcard3(card:number) {
    this.currentCard = card; 
    this.admin.getResult().subscribe((response:any)=>{
           
       console.log(response); 
        this.results=response;
    })

   }
  
}
