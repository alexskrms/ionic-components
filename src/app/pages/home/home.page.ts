import { Component, OnInit } from '@angular/core';

interface Components {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: Components[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Button',
      redirectTo: '/button'
    },
    {
      icon: 'card-outline',
      name: 'Card',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      redirectTo: '/checkbox'
    },
    {
      icon: 'calendar-outline',
      name: 'Datetime',
      redirectTo: '/datetime'
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirectTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite Scroll',
      redirectTo: '/infinitescroll'
    },
    {
      icon: 'hammer-outline',
      name: 'Input',
      redirectTo: '/input'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
