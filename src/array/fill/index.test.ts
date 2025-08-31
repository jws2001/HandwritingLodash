import { describe, it, expect } from 'vitest';
import fill from './index';

describe('fill', () => {
  it('should fill array with value from start to end', () => {
    expect(fill([1, 2, 3, 4], 'a', 1, 3)).toEqual([1, 'a', 'a', 4]);
    expect(fill([1, 2, 3, 4, 5], 0, 2, 4)).toEqual([1, 2, 0, 0, 5]);
    expect(fill(['a', 'b', 'c'], 'z', 0, 2)).toEqual(['z', 'z', 'c']);
  });

  it('should use default start and end when not provided', () => {
    expect(fill([1, 2, 3], 'a')).toEqual(['a', 'a', 'a']);
    expect(fill([1, 2, 3, 4], 'b', 1)).toEqual([1, 'b', 'b', 'b']);
  });

  it('should handle empty arrays', () => {
    expect(fill([], 'a')).toEqual([]);
    expect(fill([], 'a', 0, 5)).toEqual([]);
  });

  it('should not modify array when start >= end', () => {
    expect(fill([1, 2, 3], 'a', 2, 1)).toEqual([1, 2, 3]);
    expect(fill([1, 2, 3, 4], 'b', 3, 3)).toEqual([1, 2, 3, 4]);
  });

  it('should handle various value types', () => {
    expect(fill([1, 2, 3], null)).toEqual([null, null, null]);
    expect(fill([1, 2, 3], undefined)).toEqual([undefined, undefined, undefined]);
    expect(fill([1, 2, 3], { key: 'value' })).toEqual([{ key: 'value' }, { key: 'value' }, { key: 'value' }]);
  });
});