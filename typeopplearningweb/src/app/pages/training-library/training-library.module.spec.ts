import { TrainingLibraryModule } from './training-library.module';

describe('TrainingLibraryModule', () => {
  let trainingLibraryModule: TrainingLibraryModule;

  beforeEach(() => {
    trainingLibraryModule = new TrainingLibraryModule();
  });

  it('should create an instance', () => {
    expect(trainingLibraryModule).toBeTruthy();
  });
});
