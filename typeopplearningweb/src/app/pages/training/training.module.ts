import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingContainerComponent } from './training-container/training-container.component';
import { TrainingEquipmentComponent } from './training-equipment/training-equipment.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TrainingsRoutingModule } from './training-routing.module';
import { SharedModule } from '../../@shared/shared.module';
import { MaterialModule } from './../../material.module';
import { trainingReducer } from './training-reducer';
import { TrainingEffects } from './training-effects';
import { EquipmentTypeComponent } from './training-equipment/equipment-type/equipment-type.component';
import { EquipmentTypeListComponent } from './training-equipment/equipment-type-list/equipment-type-list.component'
import { TrainingComponent } from './training-component';
import { TrainingStartComponent } from './training-equipment/equipment-type-list/training-start/training-start.component';
import { TrainingStartDataComponent } from './training-equipment/equipment-type-list/training-start-data/training-start-data.component';
import { ThemeModule } from '../../@theme/theme.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    TrainingsRoutingModule,
    SharedModule,
    ThemeModule,
    MaterialModule,
    PdfViewerModule,
    StoreModule.forFeature('training', {
      trainingState: trainingReducer
    }),
    EffectsModule.forFeature([TrainingEffects])
  ],
  declarations: [TrainingComponent, TrainingContainerComponent, TrainingEquipmentComponent, EquipmentTypeComponent, EquipmentTypeListComponent, TrainingStartComponent, TrainingStartDataComponent]
})
export class TrainingModule { }
