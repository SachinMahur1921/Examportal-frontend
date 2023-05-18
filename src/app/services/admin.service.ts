import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'; 


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getResult() {
       
    let url = "http://localhost:8080/user/getResults";
    const tokenJSON= localStorage.getItem("token");
      
    const tokenObj = JSON.parse(tokenJSON ||"");

    const token = tokenObj.token;
      console.log(token );
    
      var headers = {headers:new HttpHeaders().set('Authorization', `Bearer ${token}`)};
     
  
     return this.http.get(url,headers);
  }
 
  public  inject:any;

  constructor( private http:HttpClient) { 
    
   

  } 
 
   getDetails()
  {    
    let url = "http://localhost:8080/user/getStudent";
     const tokenJSON= localStorage.getItem("token");
       
     const tokenObj = JSON.parse(tokenJSON ||"");

     const token = tokenObj.token;
       console.log(token );
     
       var headers = {headers:new HttpHeaders().set('Authorization', `Bearer ${token}`)};
      
   
      return this.http.get(url,headers);
  }

  delete(student: any) {
    const tokenJSON= localStorage.getItem("token");
    const tokenObj = JSON.parse(tokenJSON ||"");
    const token = tokenObj.token;
    var headers = { headers:new HttpHeaders().set('Authorization', `Bearer ${token}`)};
     let id=student.id
      console.log(id);
      let url= "http://localhost:8080/user/deleteuser"
     return this.http.get(url +'/' + id,headers);
  }

   public getSubject()
  { 
    const tokenJSON= localStorage.getItem("token");
       
    const tokenObj = JSON.parse(tokenJSON ||"");

    const token = tokenObj.token;
      console.log(token);
    
      var headers = { headers:new HttpHeaders().set('Authorization', `Bearer ${token}`)};
      console.log(headers);
    let url = "http://localhost:8080/user/getSubjects";
    return this.http.get<any>(url,headers);
  }

  deleteSubjects(card:any)
  {
        
    const tokenJSON= localStorage.getItem("token");
    const tokenObj = JSON.parse(tokenJSON ||"");
    const token = tokenObj.token;
    var headers = { headers:new HttpHeaders().set('Authorization', `Bearer ${token}`)};
    let id=card.id
    let url= "http://localhost:8080/user/deletesubject"
   return this.http.get(url +'/' + id,headers);
  }

  addSubject(Subject:any)
   {  
    let url= "http://localhost:8080/user/addSubjects"
        return this.http.post(url ,Subject);
   }
   saveMarks(Score: number) {
      

  }
}


