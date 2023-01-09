import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/constants/user.constant';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {
  public post: any = [];

  constructor( private router: Router ) { }

  ngOnInit(): void {
    this.post = User;
    
  }

}
