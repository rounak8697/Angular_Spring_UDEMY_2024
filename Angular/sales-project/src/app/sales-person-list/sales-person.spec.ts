import { SalesPerson } from './sales-person';

describe('SalesPerson', () => {
  it('should create an instance', () => {
    expect(new SalesPerson("Jagu", "dada","hvbsdhb@gmail.fr",8000)).toBeTruthy();
  });
});
