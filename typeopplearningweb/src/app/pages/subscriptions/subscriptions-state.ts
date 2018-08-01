import { TrainingLibrary } from "../training-library/training-library-state";

export interface TrainingCatState {
  errorCode?: string;
  errorMsg?: string;
  loading?: boolean;
  loadingMsg?: string;
  trainingCat: TrainingCat[];
  equipmentType : EquipmentType[];
  equipmentData : EquipmentData[];
  allowedEquipmentCategories? : EquipmentCategoryAllowed[];
  equipmentDetails? : EquipmentDetail[];
  invoiceList ?: Invoice[];
  count: number;
  currentPage: number;
  trainingDetailsList?: TrainingLibrary[];
  }

  export interface TrainingCat {
    id: string;
    trainingName: string;
    equipment: string;
    icon?: string;
    url : string;
  }

  export interface EquipmentCategory{
    id: string;
    equipmentCategory: string;
    equipmentIcon?: string;
  }

  export interface EquipmentType{
    id: string;
    equipmentType: string;
  }

  export interface EquipmentData{
    id: string;
    equipmentName: string;
    url: string;
  }

  export interface Invoice {
    id: string;
    invoiceNumber: number;
    invoiceDate: Date ;
    invoiceTotal: number;
    dueDate : Date;
    status : string;
  }

  //state used in allowed training
  export interface EquipmentCategoryAllowed {
    categoryName: string;
    categoryAlias: string;
    equipmentIcon: string;
  }

  export interface EquipmentDetail{
    _id: string;
    name: string;
    equipmentType : string;
    equipmentCategory : string;
    equipmentIcon : Date;
    manufacturer : string;
    document : string;
    model : string;
  }

