export interface TrainingState {
  errorCode?: string;
  errorMsg?: string;
  loading?: boolean;
  loadingMsg?: string;
  equipmentList? : Equipment[];
  equipmentCategories? : EquipmentCategory[];
  equipmentCategory ?: EquipmentCategory;
  equipmentType? : EquipmentType[];
  equipmentData? : EquipmentData[];
  equipmentDetail? : EquipmentData;
  equipmentDetails? : EquipmentData[];
  count: number;
  currentPage: number;
}

export interface EquipmentCategory {
  categoryName: string;
  categoryAlias: string;
  equimentIcon: string;
}

export interface Equipment {
  id?: string;
  name: string;
  details?: string;
  icon?: string;
  url : string;
}

export interface EquipmentType{
  //id: string;
  equipmentType: string;
}

export interface EquipmentData{
  _id: string;
  name: string;
  equipmentType : string;
  equipmentCategory : string;
  equipmentIcon : Date;
  manufacturer : string;
  document : string;
  model : string;
}

export interface EquipmentDetail {
  title : string;
  detail : string;
}
