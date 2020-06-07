import { all, random } from '.';

describe('all', () => {
  it('must return an array of strings', () => {
    all.forEach((character) => {
      expect(typeof character).toEqual('string');
    });
  });
});

describe('random', () => {
  it('must return one of the characters in the final space list', () => {
    expect(all).toContain(random());
  });
});
