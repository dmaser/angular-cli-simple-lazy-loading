import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.css']
})
export class Route3Component implements OnInit {

  test = '';

  constructor() { }

  ngOnInit() {
    console.log('route3 ngOnInit');
  }

}
