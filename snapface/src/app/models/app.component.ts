import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './face-snaps.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleure ami depuis tout petit',
      'https://tinyurl.com/mshr7vvd',
      new Date(),
      0,

    );

  }
} 
