import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  /*
    //get usename and password  --1
    getuserByPassword(user: User): Observable<any> {
      console.log(user.UserName);
      console.log(user.UserPassword);
      return this.httpClient.get(environment.roleUrl + "/api/users/login/" + user.UserName + "&" + user.UserPassword)
    }
  */

  //get usename and password --2  
  public loginVerify(user: User) {
    //calling webservices and passing data
    console.log(user);
    return this.httpClient.get(environment.roleUrl + "/api/users/login/" + user.UserName + "&" + user.UserPassword)

  }

  //LOGOUT
  public logOut() {
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("ACESSROLE");
    sessionStorage.removeItem("USERNAME");
    sessionStorage.removeItem("jwtToken");
  }
}
