import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  teste() {
    this.route.navigate(['tabs/tab1']);
    console.log('funfando');
  }
}
