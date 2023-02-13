import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  logged_in:any;
  ngOnInit(): void {
    this.isLoggedIn();
  }
  isLoggedIn() {
    this.logged_in= localStorage.getItem('logged_in');
    return this.logged_in ? true : false;
  }
}
