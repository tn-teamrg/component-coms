import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent app component';
  childtitle: string = 'child data';

  parentFunction(data: Event){
    // console.log('--> parentFunction have been invoked');
    console.log('--> eventData= '+ data);

  }
}
