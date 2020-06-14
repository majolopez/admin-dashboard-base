import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _settings: SettingsService) { }

  ngOnInit(): void {
    this.applyCheck();
  }

  onChangeColor(theme: string, link: any){
    this.setCheck(link);
    this._settings.setTheme(theme);
  }

  setCheck(link: any){
    let selectors: any = document.getElementsByClassName('selector');
    for (let ref of selectors){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  applyCheck(){
    let selectors: any = document.getElementsByClassName('selector');
    let theme =  this._settings.settings.theme;
    for (let ref of selectors){
      if (ref.getAttribute('data-theme') === theme){
        ref.classList.add('working');
        break;
      }
    }
  }
}
