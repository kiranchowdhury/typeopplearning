import { InvoiceContract } from './invoices-contract';
import { Injectable } from '@angular/core';
import { ApiConnectorService } from '../../@core/api-handlers/api-connector.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable'

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private apiConnectore: ApiConnectorService) { }

  getInvoiceList(): Observable<InvoiceContract> {
    return this.apiConnectore.get('/api/invoice/list', {}).pipe(
      map((resp: InvoiceContract) => resp)
    )
  }
}
