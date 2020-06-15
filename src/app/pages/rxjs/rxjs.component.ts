import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor() {
    this.subscription = this.returnObservable().pipe(
      retry(2)
    )
    .subscribe(
      num => console.log('Subs', num),
      error => console.error('Error', error),
      () => console.log('El observador termino')
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('Closing page');
    this.subscription.unsubscribe();
  }

  returnObservable(): Observable<any>{
    return  new Observable( (observer: Subscriber<any>) => {
      let counter = 0;
      const interval = setInterval(() => {
        counter += 1;
        const output = {
          value: counter
        };
        observer.next(output);
      }, 1000);
    }).pipe(
      map( resp => resp.value),
      filter( (value, index) => {
        if ( (value % 2) === 1){
            return true;
        }
        else{
          return false;
        }
      })
     );
  }
}
