import { describe, it, expect } from 'vitest';
import chunk from './index';

describe('chunk', () => {
  it('should chunk array into specified size groups', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

  it('should return original array when size is undefined', () => {
    expect(chunk([1, 2, 3, 4, 5])).toEqual([[1, 2, 3, 4, 5]]);
    expect(chunk(['a', 'b', 'c'])).toEqual([['a', 'b', 'c']]);
  });

  it('should handle edge cases', () => {
    expect(chunk([], 2)).toEqual([]);
    expect(chunk([1], 2)).toEqual([[1]]);
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    expect(chunk([1, 2, 3, 4], 5)).toEqual([[1, 2, 3, 4]]);
  });

  it('should handle size of 0', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([]);
  });
});