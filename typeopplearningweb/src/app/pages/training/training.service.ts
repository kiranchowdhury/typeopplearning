import { Injectable } from '@angular/core';
import { ApiConnectorService } from '../../@core/api-handlers/api-connector.service';
import { Observable } from 'rxjs/internal/Observable';
import { TrainingCategoryContract , EquipmentTypeRes, EquipmentTypeContract,
  EquipmentTypeIdRequest, EquipmentDataContract, EquipmentDetailReq, EquipmentDetailContract,
  EquipmentCatRequest, EquipmentCategoryCon} from './training-contract';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private apiConnector: ApiConnectorService) { }

  getEquipmentList(): Observable<TrainingCategoryContract> {
    return this.apiConnector.get('/api/training/equipment', {}).pipe(
      map((response: TrainingCategoryContract) => response)
    )
  }

  getEquipmentCategoryName(payload: EquipmentCatRequest): Observable<EquipmentCategoryCon> {
    return this.apiConnector.get('/api/training/equipment/category', payload).pipe(
      map((resp: EquipmentCategoryCon) => resp)
    )
  }

  getEquipmentTypesList(payload: EquipmentCatRequest): Observable<EquipmentTypeContract> {
    return this.apiConnector.get('/api/training/equipment/type', payload).pipe(
      map((resp: EquipmentTypeContract) => resp)
    )
  }

  getEquipmentListOnType(payload: EquipmentTypeIdRequest): Observable<EquipmentDataContract> {
    return this.apiConnector.get('/api/training/equipment/list', payload).pipe(
      map((resp: EquipmentDataContract) => resp)
    )
  }

  getTrainingStartData(payload: EquipmentDetailReq): Observable<EquipmentDetailContract> {
    return this.apiConnector.get('/api/training/start/detail', payload).pipe(
      map((resp: EquipmentDetailContract) => resp)
    )
  }

}
