import { HowtoModule } from './howto.module';

describe('HowtoModule', () => {
  let howtoModule: HowtoModule;

  beforeEach(() => {
    howtoModule = new HowtoModule();
  });

  it('should create an instance', () => {
    expect(howtoModule).toBeTruthy();
  });
});
