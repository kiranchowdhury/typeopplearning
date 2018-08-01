import { TestBed, inject } from '@angular/core/testing';

import { CertificateServiceService } from './certificate-service.service';

describe('CertificateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CertificateServiceService]
    });
  });

  it('should be created', inject([CertificateServiceService], (service: CertificateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
