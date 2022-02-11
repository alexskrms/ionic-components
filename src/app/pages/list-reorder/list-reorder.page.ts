import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  characters : string[] = ['Aquaman', 'SuperMan', 'Batman', 'Wonder Woman', 'Flash'];
  reorderEnable: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  doReorder( event: any ){
    const itemMove = this.characters.splice( event.detail.from, 1 )[0];
    this.characters.splice( event.detail.to, 0, itemMove );
    event.detail.complete();
    console.log(this.characters);
  }

}
