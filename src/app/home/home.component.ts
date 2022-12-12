import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  headerText = 'Testing Angular Applications';

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  showFeedbackPage(): void {
    this.router.navigate(['feedback']);
  }

}
