import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-video',
  // templateUrl: './video.component.html',
  // template: `<h3>{{ title }}</h3>`,
  template: `
    <h2>{{ title }}</h2>
    <button (click)="childFunction()">Hey Child</button>
  `,
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Output()
  myEvent = new EventEmitter();

  childFunction(){
    // console.log('--> childFunction is invoked');
    this.myEvent.emit('video component :: childFunction() :: i am data from child');
  }
  @Input()
  title: string = 'child app component';

  @Input()
  set setData(m: string){
    this.title = m + " appended data in child";
  }

  get setData(){
    return this.title;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
