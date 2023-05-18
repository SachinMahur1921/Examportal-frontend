import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(
    private http: HttpClient
  ) { }
  //add user
  public addUser(user: any){
  return  this.http.post(`${baseUrl}/user/register`, user)
  } 

  addresult(Score: number) {
      
    let url = "http://localhost:8080/user/addResults";
    const tokenJSON= localStorage.getItem("token");
      
    const tokenObj = JSON.parse(tokenJSON ||"");

    const token = tokenObj.token;
      console.log(token );
    
      var headers = {headers:new HttpHeaders().set('Authorization', `Bearer ${token}`)};

       return this.http.post(url,Score,headers)
        
  }
 
}
