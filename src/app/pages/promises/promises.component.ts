import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() {
    this.countThree().then(
      message => console.log('End!', message)
    ).catch(error => console.log('Error!', error));
  }

  ngOnInit(): void {
  }

  countThree(): Promise<boolean>{
    return new Promise( (resolve , reject) => {
      let counter = 0;
      let interval = setInterval(() => {
        console.log(counter);
        counter += 1;
        if ( counter === 3){
          resolve(true);
          clearInterval(interval);
        }
      }, 1000);
    });
  }
}
