import { TrainingLibrary } from './training-library-state';

export interface TrainingLibraryContract {
  status: number;
  code: string;
  message: string;
  count: number;
  trainingDetailsList: TrainingLibrary[];
}

export interface TrainingLibraryEditRequestContract {
  changesRefTrainingList: TrainingLibrary[];
  // removedRefTrainingList: TrainingLibrary[];
}

export interface TrainingLibraryEditResponseContract {
  status: number;
  code: string;
  message: string;
}

export interface CreateTrainingLibraryRequestContract {
  name:  string;
	equipmentCategory:  string;
	equimentIcon:  string;
	equipmentType:  string;
	date: Date;
	manufacturer:  string;
	model:  string;
	document:  string;
}

export interface RemoveTrainingRequestContract {
  id: string;
}
