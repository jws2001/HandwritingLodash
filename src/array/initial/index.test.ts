import { describe, it, expect } from 'vitest';
import initial from '../initial';

describe('initial', () => {
  it('should return all but the last element of an array', () => {
    expect(initial([1, 2, 3])).toEqual([1, 2]);
    expect(initial(['a', 'b', 'c', 'd'])).toEqual(['a', 'b', 'c']);
  });

  it('should return empty array for single-element array', () => {
    expect(initial([1])).toEqual([]);
    expect(initial(['a'])).toEqual([]);
  });

  it('should return empty array for empty array', () => {
    expect(initial([])).toEqual([]);
  });

  it('should handle array-like objects', () => {
    const arrayLike = {0: 'a', 1: 'b', length: 2};
    expect(initial(arrayLike)).toEqual(['a']);
  });
});