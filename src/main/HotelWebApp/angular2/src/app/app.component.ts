import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html/',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  public submitted: boolean;
  roomsearch: FormGroup;

  // title = 'A&A app working! :)';

  ngOnInit() {
    this.roomsearch = new FormGroup({
      checkin: new FormControl(''),
      checkout: new FormControl('')
    });
  }

  onSubmit({value,valid}: { value: Roomsearch, valid: boolean }) {
    console.log(value);
  }
}

  export interface Roomsearch{
    checkin: String;
    checkout: String;
}
