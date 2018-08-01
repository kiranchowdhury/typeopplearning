import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetCertificatesAction, selectorCertificates, initialCertificateState } from '../certificate-reducer';
import { CertificateState, Certificate } from '../certificate-state'
import { AppState } from '../../../@models/app-state';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'tl-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.scss']
})
export class CertificateListComponent implements OnInit {

  gridApi;
  gridColumnApi;
  columnDefs;
  defaultColumnDef;
  gridoptions;

  certificates: Certificate[] = [];

  constructor(private store: Store<AppState>) {
    this.gridoptions = <GridOptions>{
      rowHeight: 40,
      headerHeight: 40
    }
    this.columnDefs = [{
      headerName: "Status",
      width: 400,
      field: 'status',
    }, {
      headerName: "Training Name",
      width: 400,
      field: "trainingName"
    }, {
      headerName: '',
      width: 200,
      field: 'noOfUsers'
    }];
    this.defaultColumnDef = {
      editable: true,
      enableRowGroup: false,
      enablePivot: false,
      enableValue: true
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.store.select(selectorCertificates).subscribe(
      (certState: CertificateState) => {
        this.certificates = certState.certificateList;
        console.log("certificates", this.certificates);
        params.api.setRowData(certState.certificateList);
      }
    )
  }

  ngOnInit() {
    this.store.select(selectorCertificates)
    .subscribe((certificate: CertificateState) => {
      console.log('---------1---------------', certificate);
      this.certificates = certificate.certificateList;
    })
  }

}
