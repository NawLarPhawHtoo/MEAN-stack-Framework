import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'return-card',
  templateUrl: './return-card.component.html',
  styleUrls: ['./return-card.component.scss']
})
export class ReturnCardComponent {
  @Input() post:any;
  
  ngOnInit(): void {
    // console.log(this.post)
  }

}
