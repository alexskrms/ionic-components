import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinitescroll',
  templateUrl: './infinitescroll.page.html',
  styleUrls: ['./infinitescroll.page.scss'],
})
export class InfinitescrollPage implements OnInit {

  data: any[] = Array(20);

  @ViewChild( IonInfiniteScroll ) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(){
    
    if( this.data.length > 50 ){
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
      return;
    }

    const nuevoArr = Array(20);
    this.data.push( ...nuevoArr);

    setTimeout(() => {
      this.infiniteScroll.complete();
    }, 1500);
  }
}