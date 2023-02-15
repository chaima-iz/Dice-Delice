import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  logged_in:any=false;
  user:any;
  data:any;
  ngOnInit(): void {
    this.isLoggedIn();
  }
  isLoggedIn() {
    this.logged_in= localStorage.getItem('logged_in');
    this.data=localStorage.getItem('user');
    this.user=JSON.parse(this.data);
    // console.log("user: ", JSON.parse(this.data));
    return this.logged_in ? true : false;
  }
  constructor(private http: HttpClient) {}

  logout() {
    localStorage.removeItem('logged_in');
    localStorage.removeItem('user');
    window.location.href = '/home';

    this.http.post('/logout', {}).subscribe(() => {
      // redirect to login or homepage
      window.location.href = '/login';
    });
}
}