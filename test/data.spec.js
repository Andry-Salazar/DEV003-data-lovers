
import { sortData, filterData, computeStats } from '../src/data.js';



describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
  it('returns `la data ordenada`', () => {
    expect(sortData(data, sortBy, sortOrder)).toBe('la data ordenada');
  });
});

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
//   it('returns `example`', () => {
//     expect(example()).toBe('example');
  // });
});

describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });
//   it('returns `example`', () => {
//     expect(example()).toBe('example');
  // });
});

