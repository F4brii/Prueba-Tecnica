import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  url = "https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/21_Angular_logo_logos-512.png"
  
  constructor() { }

  ngOnInit(): void {
  }

}
