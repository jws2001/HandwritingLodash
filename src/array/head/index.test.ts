import { describe, it, expect } from 'vitest';
import head from './index';

describe('head', () => {
  it('should return the first element of array', () => {
    expect(head([1, 2, 3])).toBe(1);
    expect(head(['a', 'b', 'c'])).toBe('a');
    expect(head([null, 2, 3])).toBe(null);
  });

  it('should return undefined for empty array', () => {
    expect(head([])).toBe(undefined);
  });

  it('should handle arrays with different types', () => {
    expect(head([true, 1, 'a'])).toBe(true);
    expect(head([{ name: 'John' }, { name: 'Jane' }])).toEqual({ name: 'John' });
    expect(head([[1, 2], [3, 4]])).toEqual([1, 2]);
  });
});