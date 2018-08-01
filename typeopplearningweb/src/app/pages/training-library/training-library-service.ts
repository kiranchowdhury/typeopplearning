import { TrainingLibraryContract, TrainingLibraryEditRequestContract, TrainingLibraryEditResponseContract, CreateTrainingLibraryRequestContract, RemoveTrainingRequestContract } from './training-library-contract';
import { Injectable } from '@angular/core';
import { ApiConnectorService } from '../../@core/api-handlers/api-connector.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable'
import { TrainingLibrary } from './training-library-state';

@Injectable({
  providedIn: 'root'
})
export class TrainingLibraryService {

  constructor(private apiConnectore: ApiConnectorService) { }

  getTrainingLibrary(): Observable<TrainingLibraryContract> {
    return this.apiConnectore.get('/api/training-library/getall', {}).pipe(
      map((resp: TrainingLibraryContract) => resp)
    )
  }

  editTrainingLibrary(payload: TrainingLibraryEditRequestContract): Observable<TrainingLibraryEditResponseContract> {
    return this.apiConnectore.post('/api/training-library/many', payload).pipe(
      map((resp: TrainingLibraryEditResponseContract) => resp)
    )
  }

  createTrainingLibrary(payload: CreateTrainingLibraryRequestContract) : Observable<TrainingLibraryContract> {
    return this.apiConnectore.post('/api/training-library', payload).pipe(
      map((resp: TrainingLibraryContract) => resp)
    )
  }

  removeTrainingLibrary(payload: RemoveTrainingRequestContract): Observable<TrainingLibraryEditResponseContract> {
    return this.apiConnectore.post('/api/training-library/delete', {id: payload.id}).pipe(
      map((resp: TrainingLibraryEditResponseContract) => resp)
    )
  }
}
