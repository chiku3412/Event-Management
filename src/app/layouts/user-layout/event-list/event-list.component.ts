import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events = [
    {image:'../../../assets/images/slider-01.jpg', eventName:'Birthday Party'},
    {image:'../../../assets/images/slider-02.jpg', eventName:'Birthday Party'},
    {image:'../../../assets/images/slider-03.jpg', eventName:'Birthday Party'},
  ]
  
  constructor () {}

  ngOnInit(): void {
    
  }
}
