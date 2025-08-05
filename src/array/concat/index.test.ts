import { describe, it, expect } from 'vitest';
import concat from './index';

describe('concat', () => {
  it('should concatenate arrays and values', () => {
    expect(concat([1], 2, [3], [[4]])).toEqual([1, 2, [3], [[4]]]);
    expect(concat(['a'], 'b', ['c'], [['d']])).toEqual(['a', 'b', ['c'], [['d']]]);
  });

  it('should handle empty array', () => {
    expect(concat([], 1, 2, 3)).toEqual([1, 2, 3]);
    expect(concat([1, 2], [])).toEqual([1, 2, []]);
  });

  it('should handle no additional values', () => {
    expect(concat([1, 2, 3])).toEqual([1, 2, 3]);
    expect(concat([])).toEqual([]);
  });

  it('should handle multiple arrays', () => {
    expect(concat([1, 2], [3, 4], [5, 6])).toEqual([1, 2, [3, 4], [5, 6]]);
  });

  it('should handle mixed data types', () => {
    expect(concat([1], 'string', true, null, undefined)).toEqual([1, 'string', true, null, undefined]);
    expect(concat(['a'], {b: 2}, [3, 4])).toEqual(['a', {b: 2}, [3, 4]]);
  });

  it('should preserve object references', () => {
    const obj = { key: 'value' };
    const arr = [1, 2];
    const result = concat([obj], arr);
    expect(result).toEqual([obj, arr]);
    expect(result[0]).toBe(obj);
    expect(result[1]).toBe(arr);
  });

  it('should handle nested arrays as single values', () => {
    expect(concat([1], [2, [3, 4]])).toEqual([1, [2, [3, 4]]]);
    expect(concat([[1, 2]], [[3, 4]])).toEqual([[1, 2], [[3, 4]]]);
  });
});