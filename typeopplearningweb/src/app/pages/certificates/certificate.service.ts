import { GetCertificateResponse } from './certificate-contracts';
import { Injectable } from '@angular/core';
import { ApiConnectorService } from '../../@core/api-handlers/api-connector.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable'

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private apiConnector: ApiConnectorService) { }

    getCertificates(): Observable<GetCertificateResponse> {
      return this.apiConnector.get('/api/certificate/getall', {}).pipe(
        map((resp: GetCertificateResponse) => resp)
      )
    }

}
