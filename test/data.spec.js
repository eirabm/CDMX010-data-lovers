import { getpokemoncito, anotherExample } from '../src/data.js';


describe('example', () => {
  it.skip('is a function', () => {
    expect(typeof getpokemoncito).toBe('function');
  });

  it.skip('returns `example`', () => {
    expect(getpokemoncito()).toBe('example');
  });
});


describe('anotherExample', () => {
  it.skip('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it.skip('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});