export interface CertificateState {
  code?: string;
  message?: string;
  isError?: boolean;
  loading?: boolean;
  loadingMsg?: string;
  certificateList: Certificate[];
  count: number;
  currentPage: number;
}

export interface Certificate {
  id: string,
  trainingName: string,
  status: string
}
