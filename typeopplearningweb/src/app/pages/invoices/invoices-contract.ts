import { Invoice } from './invoices-state'

export interface InvoiceContract {
    status: number;
    code: string;
    message: string;
    count: number;
    invoiceList: Invoice[];
  }