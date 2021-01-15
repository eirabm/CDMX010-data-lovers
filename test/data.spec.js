import { example, anotherExample } from '../src/data.js';


describe('example', () => {
<<<<<<< HEAD
  it.skip('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it.skip('returns `example`', () => {
=======
  it.skip ('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it.skip ('returns `example`', () => {
>>>>>>> 0bc5026 (navbar responsive)
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
<<<<<<< HEAD
  it.skip('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it.skip('returns `anotherExample`', () => {
=======
  it.skip ('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it.skip ('returns `anotherExample`', () => {
>>>>>>> 0bc5026 (navbar responsive)
    expect(anotherExample()).toBe('OMG');
  });
});
