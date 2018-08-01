import{TrainingCat, EquipmentType, EquipmentData, Invoice, EquipmentCategoryAllowed,
  EquipmentDetail } from './subscriptions-state'

export interface TrainingCatContract {
    status: number;
    code: string;
    message: string;
    count: number;
    equipmentCat: TrainingCat[];
  }

  export interface EquipmentTypeContract {
    status: number;
    code: string;
    message: string;
    count: number;
    equipmentType: EquipmentType[];
  }

  export interface EquipmentDataContract {
    status: number;
    code: string;
    message: string;
    count: number;
    equipmentData: EquipmentData[];
  }

  export interface EquipmentTypeRes {
    equipmentCat : string;
  }

  export interface EquipmentTypeIdRequest {
    equipmentId : string;
    equipmentType: string;
  }

  export interface InvoiceContract {
    status: number;
    code: string;
    message: string;
    count: number;
    invoiceList: Invoice[];
  }

  export interface PurchaseTrainingRequestContract {
    id: string;
  }

  export interface PurchaseTrainingResponseContract {
    status: number;
    code: string;
    message: string;
  }

  //allowed training category contract
  export interface AllowedTrainingCategoryResponseContract {
    status: number;
    code: string;
    message: string;
    equipmentCategories : EquipmentCategoryAllowed[];
  }
  export interface AllowedTrainingDetailRequest {
    trainingId : string;
  }
  export interface AllowedTrainingDetailContract {
    status: number;
    code: string;
    message: string;
    count: number;
    equipmentDetails: EquipmentDetail[];
  }

