import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { myPipe } from '../_helpers/myPipe';
import { delay, debounceTime, distinctUntilChanged, switchMap, map, filter, tap } from 'rxjs/operators';
import { VideoMapper } from '../_helpers/videoConverter';


@Injectable()

export class DataService {
  // videoMapper = new VideoMapper();
  public columnDefs = [
    { headerName: '', field: 'foto', width: 70, resizable: true },
    { headerName: 'Published on', field: 'published', width: 70, resizable: true },
    { headerName: 'Video Title', field: 'title', width: 70, resizable: true },
    { headerName: 'Description', field: 'description', width: 70, resizable: true },
  ];
  public items: Array<object | undefined> = [];
  public rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get<any>(environment.apiUrl).pipe(myPipe(), tap(this.saveData));
  }
  public saveData(items: any): void {

    const arr: Array<object | undefined> = items.map(((item: any) => VideoMapper(item)));
    console.log('arr:', arr);
    this.items = arr;
  }

}
