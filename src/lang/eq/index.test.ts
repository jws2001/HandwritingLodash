import { describe, it, expect } from 'vitest';
import eq from './index';

describe('eq', () => {
  it('should return true for same primitive values', () => {
    expect(eq(1, 1)).toBe(true);
    expect(eq('hello', 'hello')).toBe(true);
    expect(eq(true, true)).toBe(true);
    expect(eq(false, false)).toBe(true);
  });

  it('should return false for different primitive values', () => {
    expect(eq(1, 2)).toBe(false);
    expect(eq('hello', 'world')).toBe(false);
    expect(eq(true, false)).toBe(false);
    expect(eq(1, '1')).toBe(false);
  });

  it('should handle NaN correctly', () => {
    expect(eq(NaN, NaN)).toBe(true);
    expect(eq(NaN, 1)).toBe(false);
  });

  it('should handle +0 and -0 correctly', () => {
    expect(eq(+0, -0)).toBe(true);
    expect(eq(-0, -0)).toBe(true);
    expect(eq(+0, +0)).toBe(true);
  });

  it('should handle null and undefined', () => {
    expect(eq(null, null)).toBe(true);
    expect(eq(undefined, undefined)).toBe(true);
    expect(eq(null, undefined)).toBe(false);
    expect(eq(null, 0)).toBe(false);
    expect(eq(undefined, '')).toBe(false);
  });

  it('should return false for different object references', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    expect(eq(obj1, obj2)).toBe(false);
    
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    expect(eq(arr1, arr2)).toBe(false);
  });

  it('should return true for same object references', () => {
    const obj = { a: 1 };
    expect(eq(obj, obj)).toBe(true);
    
    const arr = [1, 2, 3];
    expect(eq(arr, arr)).toBe(true);
  });

  it('should handle symbols', () => {
    const sym1 = Symbol('test');
    const sym2 = Symbol('test');
    expect(eq(sym1, sym1)).toBe(true);
    expect(eq(sym1, sym2)).toBe(false);
  });
});