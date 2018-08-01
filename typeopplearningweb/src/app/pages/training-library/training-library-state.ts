import { UserDetailData } from "../user-list/user-list-state";

export interface TrainingLibraryState {
  errorCode?: string;
  errorMsg?: string;
  loading?: boolean;
  loadingMsg?: string;
  trainingLibraries: TrainingLibrary[];
  count: number;
  currentPage: number;
  trainingSave?: boolean;
}

export interface TrainingLibrary {
  _id: string;
  name:  string;
	equipmentCategory:  string;
	equipmentIcon:  string;
	equipmentType:  string;
	date: Date;
	manufacturer:  string;
	model:  string;
	document:  string;
}

// export interface EmployeeTraining {
//   employee: UserDetailData;
//   trainingdetails: TrainingLibrary;
//   status: string;
//   _id: string;
// }
