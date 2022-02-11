import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() name: string;
  @Input() country: string;

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  leaveWithoutArguments(){
    this.modalCtrl.dismiss();
  }

  leaveWithArguments(){
    this.modalCtrl.dismiss({
      name: "Alex",
      country: "Spain"
    });
  }
}
