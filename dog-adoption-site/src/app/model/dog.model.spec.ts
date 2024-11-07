import { Dog } from './dog.model';

describe('Dog', () => {
  it('should create an instance', () => {
    expect(new Dog()).toBeTruthy();
  });
});
