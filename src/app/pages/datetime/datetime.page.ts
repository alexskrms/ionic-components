import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  bornDate: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  changeDate( event ){
    console.log(event);
    console.log(new Date( event.detail.value ));
  }

}
