import { describe, it, expect } from 'vitest';
import compact from './index';

describe('compact', () => {
  it('should remove falsy values from array', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
    expect(compact([null, undefined, 'hello', 0, '', 'world'])).toEqual(['hello', 'world']);
  });

  it('should handle array with all falsy values', () => {
    expect(compact([false, null, 0, '', undefined, NaN])).toEqual([]);
  });

  it('should handle array with all truthy values', () => {
    expect(compact([1, 2, 3, 'a', 'b', true])).toEqual([1, 2, 3, 'a', 'b', true]);
    expect(compact(['hello', 42, {}, []])).toEqual(['hello', 42, {}, []]);
  });

  it('should handle empty array', () => {
    expect(compact([])).toEqual([]);
  });

  it('should handle mixed data types', () => {
    expect(compact([1, null, 'test', false, 0, {name: 'obj'}, ''])).toEqual([1, 'test', {name: 'obj'}]);
  });

  it('should preserve object references', () => {
    const obj = { key: 'value' };
    const arr = [obj, null, undefined];
    const result = compact(arr);
    expect(result).toEqual([obj]);
    expect(result[0]).toBe(obj);
  });
});