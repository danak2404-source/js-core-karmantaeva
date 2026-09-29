import { describe, it, expect, vi } from 'vitest';
import { unique, groupBy, chunk, deepClone, memoize, counter } from '../src/functions.js';

describe('Part 1: Functions Unit Tests', () => {
  it('1. unique removes duplicates', () => {
    expect(unique([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
    expect(unique([])).toEqual([]);
  });

  it('2. groupBy groups elements by key', () => {
    const data = [{ type: 'a' }, { type: 'b' }, { type: 'a' }];
    const grouped = groupBy(data, i => i.type);
    expect(grouped.a).toHaveLength(2);
  });

  it('3. chunk splits array by size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('4. deepClone clones nested objects', () => {
    const orig = { a: { b: 1 } };
    const clone = deepClone(orig);
    clone.a.b = 99;
    expect(orig.a.b).toBe(1);
  });

  it('5. memoize caches function result', () => {
    const fn = vi.fn((x) => x * 2);
    const memoized = memoize(fn);
    memoized(5);
    memoized(5);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('6. counter closure holds internal count state', () => {
    const cnt = counter(5);
    expect(cnt.value()).toBe(5);
    expect(cnt.inc()).toBe(6);
    expect(cnt.dec()).toBe(5);
  });
});
