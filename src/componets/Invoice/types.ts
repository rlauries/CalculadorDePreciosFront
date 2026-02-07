export interface InvoiceItem {
  description: string;
  quantity?: number;
  feet?: number;
  totalCost?: number;
}

export interface ClientInfo {
  companyName: string;
  address: string;
  city: string;
  phone: string;
}

export interface InvoiceTotals {
  subtotal: number;
  finalTotal: number;
}

export interface InvoiceProps {
  invoiceNumber: string;
  date: string;
  client: ClientInfo;
  items: InvoiceItem[];
  totals: InvoiceTotals;
}
