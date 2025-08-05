import { describe, it, expect } from 'vitest';
import isArray from './index';

describe('isArray', () => {
  it('should return true for arrays', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray(['a', 'b', 'c'])).toBe(true);
    expect(isArray([null, undefined])).toBe(true);
    expect(isArray([[1, 2], [3, 4]])).toBe(true);
  });

  it('should return false for non-arrays', () => {
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(123)).toBe(false);
    expect(isArray('string')).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(false)).toBe(false);
  });

  it('should return false for objects', () => {
    expect(isArray({})).toBe(false);
    expect(isArray({ length: 3 })).toBe(false);
    expect(isArray({ 0: 'a', 1: 'b', length: 2 })).toBe(false);
  });

  it('should return false for functions', () => {
    expect(isArray(function() {})).toBe(false);
    expect(isArray(() => {})).toBe(false);
    expect(isArray(Array)).toBe(false);
  });

  it('should return false for array-like objects', function () {
    expect(isArray(arguments)).toBe(false);
    expect(isArray({ length: 0 })).toBe(false);
  });

  it('should handle Date and RegExp objects', () => {
    expect(isArray(new Date())).toBe(false);
    expect(isArray(/regex/)).toBe(false);
  });

  it('should handle symbols and bigint', () => {
    expect(isArray(Symbol('test'))).toBe(false);
    expect(isArray(BigInt(123))).toBe(false);
  });

  it('should handle typed arrays', () => {
    expect(isArray(new Int8Array())).toBe(false);
    expect(isArray(new Uint8Array())).toBe(false);
    expect(isArray(new Float32Array())).toBe(false);
  });
});