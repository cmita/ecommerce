import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import {
  takeWhile,
  delay,
  scan,
  concat,
  distinctUntilChanged,
  debounceTime,
  map,
  catchError,
  finalize
} from 'rxjs/operators';
import { fromEvent, from, of, Subject, throwError, Observable, Observer } from 'rxjs';

@Component({
  selector: 'st-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.scss']
})
export class RxjsDemoComponent implements OnInit, AfterViewInit {
  constructor(
    private userService: UserService,
    private httpClient: HttpClient
  ) {
    // this.userService.getUser()
    //   .pipe(
    //     retryWhen(this.retryLogic)
    //   )
    //   .subscribe(
    //   response => { console.log(response); },
    //   error => { console.log(error); }
    // );
    //this.userService.createUser('cmita','tula').subscribe(
    // (createResponse) => { console.log({createResponse}); },
    //(error) => {console.log(error) })//alert(JSON.stringify(error))}
    // );
  }

  ngOnInit() {
    // this.testCreateObservable();
    // this.createObservable2();
    // this.createObservableFromEvent();
    // this.createObservableFromPromise();
    // this.concatTest();
    // this.testSubject();

    this.errorHandingInRxJS();
  }
  retryLogic(error) {
    return error.pipe(
      scan((acc, val) => {
        console.log(acc);
        return acc + 1;
      }, 0),
      takeWhile(val => val < 5),
      delay(1000)
    );
  }

  private concatTest() {
    const ob1$ = this.httpClient.get('http://localhost:4200/assets/actor.json');
    const ob2$ = this.httpClient.get(
      'http://localhost:4200/assets/movies.json'
    );

    // ob1$.subscribe(actors => {
    //   console.log(actors);
    //   ob2$.subscribe(movies => {
    //     console.log(movies);

    //   });
    // });

    /* concat(ob1$, ob2$).subscribe(combined => {
      console.log(combined);
    }); */
  }

  ngAfterViewInit() {
    fromEvent(document.getElementById('abc'), 'keyup')
      .pipe(
        map(data => data['target']['value']),
        distinctUntilChanged(),
        debounceTime(300)
      )
      .subscribe(data => {
        console.log(data);
      });
  }

  private createObservableFromEvent() {
    fromEvent(document, 'mousemove').subscribe((event: MouseEvent) => {
      console.log(`fromEvent >> mousemove >>>  `, event);
    });
  }

  private createObservableFromPromise() {
    from(this.createPromiseForTesting()).subscribe(data => {
      console.log(`from >>> promise >>> data >>> `, data);
    });
  }

  public createPromiseForTesting() {
    return new Promise((resolveHandler, rejectHandler) => {
      setTimeout(() => {
        return resolveHandler([1, 2, 3, 4, 5, 6, 7, 8]);
      }, 5000);
    });
  }

  private createObservable2() {
    of([1, 2, 3, 3, 5, 6]).subscribe(
      data => console.log(data),
      error => console.error(error),
      () => console.log('of COMPLETED')
    );
  }

  private testCreateObservable() {
    const source$ = this.createObservable();
    const subscription = source$.subscribe(
      data => {
        console.log(`surce$ >> data >>${data} `);
      },
      error => {
        console.log(`source$ >>> error >>> `, error);
      },
      () => {
        console.log(`source$ >>> COMPLETED`);
      }
    );
    setTimeout(() => {
      console.log('requesting termination');
      subscription.unsubscribe();
    }, 10000);
  }

  public createObservable() {
    return Observable.create((observer: Observer<any>) => {
      let i = 0;
      const timerId = setInterval(() => {
        console.log(`inside of setInterval`);

        if (i === 25) {
          observer.error(new Error('Some unknown error happened!!!'));
        }

        if (i === 20) {
          observer.complete();
        }

        observer.next(i++);
      }, 1000);
      return () => {
        clearInterval(timerId);
        console.log('returning from observalble');
      };
    });
  }

  public testSubject() {
    const subject$ = new Subject<string>();

    subject$.subscribe(
      data => console.log('obs$1 >> data >> ', data),
      error => console.log('obs1 >> error  >>  ', error),
      () => console.log('obs1 >> COMPLETED')
    );

    subject$.subscribe(
      data => console.log('obs$2 >> data >> ', data),
      error => console.log('obs2 >> error  >>  ', error),
      () => console.log('obs2 >> COMPLETED')
    );

    subject$.subscribe(
      data => console.log('obs$3 >> data >> ', data),
      error => console.log('obs3 >> error  >>  ', error),
      () => console.log('obs3 >> COMPLETED')
    );

    let val = 100;
    const tid = setInterval(() => {
      subject$.next(`${val++}`);
    }, 1000);

    setTimeout(() => {
      clearInterval(tid);
    }, 10000);
  }

  public errorHandingInRxJS() {
    const observer: Observer<any> = {
      next: data => {
        // this.showSpinner = false;
        console.log(data);
      },
      error: error => {
        // this.showSpinner = false;
        console.warn(error);
      },
      complete: () => {
        // this.showSpinner = false;
        console.log('COMPLETED');
      }
    };
    this.httpClient
      .get('http://localhost:4200/assets/actor.json')
      .pipe(
        catchError(error => {
          console.log('inside of catchError');
          return throwError({ msg: error.message });
        }),
        finalize(() => {
          console.log('Action to be executed always');
        })
      )
      .subscribe(observer);
  }
}
