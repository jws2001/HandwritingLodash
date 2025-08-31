import { describe, it, expect } from 'vitest';
import indexOf from './index';

describe('indexOf', () => {
  it('should return the index of the first occurrence of value', () => {
    expect(indexOf([1, 2, 1, 2], 2)).toBe(1);
    expect(indexOf(['a', 'b', 'c'], 'a')).toBe(0);
    expect(indexOf([null, undefined, false], null)).toBe(0);
  });

  it('should return -1 if value is not found', () => {
    expect(indexOf([1, 2, 3], 4)).toBe(-1);
    expect(indexOf(['a', 'b', 'c'], 'd')).toBe(-1);
    expect(indexOf([null, undefined], true)).toBe(-1);
  });

  it('should work with fromIndex', () => {
    expect(indexOf([1, 2, 1, 2], 2, 2)).toBe(3);
    expect(indexOf(['a', 'b', 'c', 'a'], 'a', 1)).toBe(3);
    expect(indexOf([1, 2, 3, 4, 5], 1, 1)).toBe(-1);
  });

  it('should handle empty arrays', () => {
    expect(indexOf([], 1)).toBe(-1);
    expect(indexOf([], null)).toBe(-1);
  });

  it('should use strict equality for comparison', () => {
    expect(indexOf([1, '1'], '1')).toBe(1);
    expect(indexOf([0, false], false)).toBe(1);
    expect(indexOf([null, undefined], null)).toBe(0);
    
    // Objects are compared by reference
    const obj = { a: 1 };
    expect(indexOf([{ a: 1 }, obj], obj)).toBe(1);
    expect(indexOf([{ a: 1 }, { a: 1 }], { a: 1 })).toBe(-1);
  });
});