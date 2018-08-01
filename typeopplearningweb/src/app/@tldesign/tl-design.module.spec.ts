import { TlDesignModule } from './tl-design.module';

describe('TlDesignModule', () => {
  let tlDesignModule: TlDesignModule;

  beforeEach(() => {
    tlDesignModule = new TlDesignModule();
  });

  it('should create an instance', () => {
    expect(tlDesignModule).toBeTruthy();
  });
});
