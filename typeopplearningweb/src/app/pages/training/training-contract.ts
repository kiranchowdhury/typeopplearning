import { Equipment, EquipmentType, EquipmentData, EquipmentDetail, EquipmentCategory } from "./training-state";

export interface TrainingCategoryContract {
  status: number;
  code: string;
  message: string;
  count: number;
  equipmentCategories: EquipmentCategory[];
}

export interface EquipmentTypeContract {
  status: number;
  code: string;
  message: string;
  count: number;
  equipmentDetails: EquipmentData[];
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
  equipmentType: string;
}

export interface EquipmentDetailReq {
  trainingId : string;
}

export interface EquipmentDetailContract {
  status: number;
  code: string;
  message: string;
  count: number;
  equipmentDetail: EquipmentData;
}

export interface EquipmentCatRequest {
  trainingId : string;
}
export interface EquipmentCategoryCon {
  status: number;
  code: string;
  message: string;
  equipmentCategory: EquipmentCategory;
}
