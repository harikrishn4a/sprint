type Node<K, V> = {
  key: K;
  value: V;
};

export class LRUCache<K, V> {
  private capacity: number;
  private map = new Map<K, Node<K, V>>();

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  get(key: K): V | undefined {
    const node = this.map.get(key);
    if (!node) return undefined;
    this.map.delete(key);
    this.map.set(key, node);
    return node.value;
  }

  set(key: K, value: V) {
    if (this.map.has(key)) {
      this.map.delete(key);
    }

    this.map.set(key, { key, value });

    if (this.map.size > this.capacity) {
      const lruKey = this.map.keys().next().value;
      this.map.delete(lruKey);
    }
  }
}
