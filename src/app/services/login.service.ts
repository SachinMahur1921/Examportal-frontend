
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
    public  inject:any;
  constructor(private http:HttpClient ) {
    //genrate token

   
} 

// login user :set token to lokal storage
   
// public obj={
//   username:"",
//    Score:""
// }

 public user={
     useremail:"",
     password:""
 }

ngonInit() {

          
         
 
  
   
 }


 public isLogin(username: string, password: string){
  let url = "http://localhost:8080/user/authenticate";
  
    this.user.useremail=username;
    this.user.password=password;
     console.log(username,password)
  
    return this.http.post(url,this.user);
  
}
    
 public getrole() {
  let url = "http://localhost:8080/user/token";
   
 const tokenJSON=localStorage.getItem("token");
   
 const tokenObj = JSON.parse(tokenJSON ||"");

 const token = tokenObj.token;

   console.log(token)


   const httpOptions = {
    headers: new HttpHeaders({
      'response-Type': 'text',
      'Authorization':`Bearer ${token}`
    }),responseType: 'text' as 'json' 
  }; 
       console.log(httpOptions)
   return this.http.get<any>(url,httpOptions)
}








//   public logout(){
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//      return true;
//   }
      public getToken(){
        
       return localStorage.getItem("token");
}
   
public setUser(user: any)
{
  localStorage.setItem('user',JSON.stringify(user));
 
}
// public getUser(): void
// {
//   let userStr=localStorage.getItem('user');
//    if(userStr!=null)
//    {
//       JSON.parse(userStr);
//    }
//    else{
//     this.logout();
   
//    }
// }
//   public getUserRole()
//   {
//     let user = this.getUser();
//     return user;
//   }
   
// saveMarks(Score:any) {
    
//   console.log(this.LoginUsername)
   
//   this.obj.username= this.LoginUsername;

//    this.obj.Score=Score;
//   let url= "http://localhost:8080/user/addMarks"
//    return this.http.post(url,this.obj);
// }
}