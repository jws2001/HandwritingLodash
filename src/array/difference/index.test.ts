import { describe, it, expect } from 'vitest'
import difference from './index'

describe('difference', () => {
  it('should return elements from the first array not present in the second array', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1])
    expect(difference([1, 2, 3], [4, 2])).toEqual([1, 3])
    expect(difference(['a', 'b', 'c'], ['a', 'c'])).toEqual(['b'])
  })

  it('should return empty array when first array is empty', () => {
    expect(difference([], [1, 2, 3])).toEqual([])
  })

  it('should return original array when second array is empty', () => {
    expect(difference([1, 2, 3], [])).toEqual([1, 2, 3])
  })

  it('should return empty array when both arrays are empty', () => {
    expect(difference([], [])).toEqual([])
  })

  it('should return original array when no elements match', () => {
    expect(difference([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3])
  })

  it('should return empty array when all elements match', () => {
    expect(difference([1, 2, 3], [1, 2, 3])).toEqual([])
  })

  it('should handle duplicate elements in first array', () => {
    expect(difference([1, 2, 2, 3], [2])).toEqual([1, 3])
    expect(difference([1, 1, 2, 3], [1])).toEqual([2, 3])
  })

  it('should handle different data types', () => {
    expect(difference([1, '2', true], [1, true])).toEqual(['2'])
    expect(difference([null, undefined, 0], [null])).toEqual([undefined, 0])
  })

  it('should use strict equality for comparison', () => {
    expect(difference([1, '1'], [1])).toEqual(['1'])
    expect(difference([0, false], [false])).toEqual([0])
  })

  it('should handle objects and arrays', () => {
    const obj1 = { a: 1 }
    const obj2 = { a: 1 }
    const arr1 = [1, 2]
    const arr2 = [1, 2]
    
    expect(difference([obj1, obj2], [obj1])).toEqual([obj2])
    expect(difference([arr1, arr2], [arr1])).toEqual([arr2])
  })
})