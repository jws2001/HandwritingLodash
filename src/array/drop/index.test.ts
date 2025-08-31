import { describe, it, expect } from 'vitest';
import drop from './index';

describe('drop', () => {
  it('should drop the first n elements from array', () => {
    expect(drop([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5]);
    expect(drop(['a', 'b', 'c', 'd'], 1)).toEqual(['b', 'c', 'd']);
    expect(drop([1, 2, 3, 4, 5, 6], 3)).toEqual([4, 5, 6]);
  });

  it('should drop 1 element when n is undefined', () => {
    expect(drop([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
    expect(drop(['a', 'b', 'c'])).toEqual(['b', 'c']);
  });

  it('should handle edge cases', () => {
    expect(drop([], 2)).toEqual([]);
    expect(drop([1], 1)).toEqual([]);
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
    expect(drop([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});