import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Components } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: Observable<Components[]>;

  constructor( private menuCtrl: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOpts();
  }

  showMenu(){
    this.menuCtrl.open("first");
  }

}
