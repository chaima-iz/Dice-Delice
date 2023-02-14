import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {
  private baseUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  signup(newUser:any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const data = {
      "firstName":newUser.firstName,
      "lastName":newUser.lastName,
      "gender":newUser.gender,
      "dateBirth":newUser.dateBirth,
      "address":newUser.address,
      "city":newUser.city,
      "username":newUser.username,
      "phone":newUser.phone,
      "email":newUser.email,
      "password":newUser.password,
      "password_confirmation":newUser.Cpassword,
      "picture":"null.jpeg"
    };
    return this.http.post(`${this.baseUrl}/signUp` , data , {headers});
  }
}
