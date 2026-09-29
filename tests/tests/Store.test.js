import { describe, it, expect } from 'vitest';
import { Store, SortedStore } from '../src/Store.js';

describe('Part 2: Store Classes Unit Tests', () => {
  it('1. Store adds and finds items', () => {
    const store = new Store();
    store.add({ id: 1, price: 100 });
    expect(store.find(1)).toEqual({ id: 1, price: 100 });
  });

  it('2. Store removes items by id', () => {
    const store = new Store([{ id: 1, price: 100 }]);
    store.remove(1);
    expect(store.items).toHaveLength(0);
  });

  it('3. Store total calculates sum', () => {
    const store = new Store([{ id: 1, price: 100 }, { id: 2, price: 200 }]);
    expect(store.total()).toBe(300);
  });

  it('4. Store static method works', () => {
    const store = Store.createDefaultStore();
    expect(store.items).toHaveLength(2);
  });

  it('5. SortedStore returns items sorted by price', () => {
    const store = new SortedStore();
    store.add({ id: 1, price: 500 });
    store.add({ id: 2, price: 100 });
    expect(store.items[0].price).toBe(100);
  });
});
