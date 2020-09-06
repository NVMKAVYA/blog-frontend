import { Component, OnInit } from '@angular/core';

// decorator is enabling the below class to become part of Angular framework
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
