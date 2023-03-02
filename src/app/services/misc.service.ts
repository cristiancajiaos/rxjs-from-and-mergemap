import { Injectable } from '@angular/core';
import { from, interval, Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MiscService {

  constructor() { }

  foo(letters: string[]): Observable<any> {
    return from(letters).pipe(
      mergeMap(letter => interval(1000).pipe(
        map(i => letter + i)
      ))
    );
  }
}
