export interface InvoiceState {
    errorCode?: string;
    errorMsg?: string;
    loading?: boolean;
    loadingMsg?: string;
    invoiceList: Invoice[];
    count: number;
    currentPage: number;
  
  }
  
  export interface Invoice {
    id: string;
    invoiceNumber: number;
    invoiceDate: Date ;
    invoiceTotal: number;
    dueDate : Date;
    status : string;
  }
  