import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      title:  'Principal',
      icon:   'mdi mdi-gauge',
      submenu: [
          { title: 'Dashboard', url: '/dashboard'},
          { title: 'Progress Bar', url: '/progress'},
          { title: 'Graphics', url: '/graphics1'},
          { title: 'Promises', url: '/promises'},
          { title: 'RxJs', url: '/rxjs'},
        ]
    }
  ]

  constructor() { }
}
