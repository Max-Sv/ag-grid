import { Component, OnInit, Self } from '@angular/core';
import { DataService } from './_services/data.service';
import { GridOptions } from '@ag-grid-community/core';
import { AllModules } from '@ag-grid-enterprise/all-modules';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  title = 'my-app';
  gridOptions: GridOptions;
  initialRowDataLoad$;
  modules = AllModules;
  public columnDefs: any;

  public rowData: any;

  constructor(@Self() private dataService: DataService) {
    // this.initialRowDataLoad$ = dataService.initialLoad();
    this.initialRowDataLoad$ = dataService.getData();
    this.gridOptions = ({
      enableRangeSelection: true,
      columnDefs: this.createColumnDefs(),

      immutableData: true,
      onGridReady: () => {
        this.initialRowDataLoad$.subscribe(
          rowData => {
            console.log('rowData:', rowData);
            // if (this.gridOptions.api) { // can be null when tabbing between the examples
            //   this.gridOptions.api.setRowData(rowData);
            // }
            // this.rowDataUpdates$.subscribe((newRowData) => {
            //   if (this.gridOptions.api) {
            //     this.gridOptions.api.setRowData(newRowData);
            //   }
            // });
          }
        );
      },

      onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
      }
    } as GridOptions);
  }

  ngOnInit(): void {
    this.columnDefs = this.dataService.columnDefs;
    this.rowData = this.dataService.rowData;
    this.dataService.getData().subscribe(console.log);
  }
  private createColumnDefs(): Array<object> {
    return [
      { headerName: '', field: 'foto', width: 200, resizable: true },
      { headerName: 'Published on', field: 'published', width: 200, resizable: true },
      { headerName: 'Video Title', field: 'title', width: 200, resizable: true },
      { headerName: 'Description', field: 'description', width: 200, resizable: true },
    ];
  }

}
