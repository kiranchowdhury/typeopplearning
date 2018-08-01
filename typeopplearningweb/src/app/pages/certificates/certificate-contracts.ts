import { Certificate } from "./certificate-state";


export interface CertificateContract {
  status: number;
  code: string;
  message: string;
  count: number;
  certificates: Certificate[]
}
/** Get Certificate Contract */
export interface GetCertificateRequest {

  }
  export interface GetCertificateResponse {
      status: number;
      code: string;
      message: string;
      count: number;
      certificates: Certificate[];
  }
