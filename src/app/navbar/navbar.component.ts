import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  action: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    this.action = !this.action;

  }

}
