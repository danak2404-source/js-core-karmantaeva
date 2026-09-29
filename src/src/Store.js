export class Store {
  #items;

  constructor(initialItems = []) {
    this.#items = Array.isArray(initialItems) ? [...initialItems] : [];
  }

  get items() {
    return [...this.#items];
  }

  add(item) {
    if (!item || typeof item !== 'object') return false;
    this.#items.push(item);
    return true;
  }

  remove(id) {
    const initialLength = this.#items.length;
    this.#items = this.#items.filter((item) => item.id !== id);
    return this.#items.length < initialLength;
  }

  find(id) {
    return this.#items.find((item) => item.id === id) || null;
  }

  total() {
    return this.#items.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
  }

  static createDefaultStore() {
    return new Store([
      { id: 1, name: 'Eco Bag', price: 1500 },
      { id: 2, name: 'Bamboo Toothbrush', price: 800 }
    ]);
  }
}

export class SortedStore extends Store {
  constructor(initialItems = []) {
    super(initialItems);
  }

  add(item) {
    return super.add(item);
  }

  get items() {
    const baseItems = super.items;
    return baseItems.sort((a, b) => (a.price || 0) - (b.price || 0));
  }
}
