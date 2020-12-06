import { IterableDiffers } from '@angular/core';
import { of, OperatorFunction, Observable } from 'rxjs';
import { delay, debounceTime, distinctUntilChanged, switchMap, map, filter } from 'rxjs/operators';


export function myPipe<R>(): OperatorFunction<any, R> {
  return data$ => data$.pipe(map((res) => res.items), filter(item => item));
}
