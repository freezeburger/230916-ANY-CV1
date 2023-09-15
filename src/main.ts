import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, from, fromEvent, of } from 'rxjs';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/*
  Observable Theory
  Implementation Observer Pattern - https://refactoring.guru/fr/design-patterns/observer
*/

/**
 * Pbservable
 *
 * Subject
 * ReplaySubject
 * BehaviorSubject
 * AsyncSubject
 */

/*
const observable = new Observable((subscriber) => {
    subscriber.next('Emitte Valued');
    subscriber.complete();
});

observable.subscribe(console.warn)
*/

/*
const observable = new Subject();
observable.next('A')
observable.subscribe(console.warn)
observable.next('B')
*/

// const observable = fromEvent(window, 'click');
// const observable = of([1,2,3]);
// const observable = from([1,2,3]);
// const observable = from(fetch('https://dummyjson.com/products/1').then(res => res.json()));
// observable.subscribe(console.warn)


// const observable = new Subject();
//const observable = new ReplaySubject(2);
// const observable = new BehaviorSubject('START');
/* const observable = new AsyncSubject();

observable.next('A')
observable.next('B')
observable.next('C')
observable.subscribe(console.warn)
observable.next('D')
observable.complete()
 */
