interface DynamicNumberDictionary {
  // Allows dynamic access to properties using string keys
  [index: string]: number;
}

class OptimizedDynamicNumberDictionary {
  private _storage: DynamicNumberDictionary = {};

  // Method to set a number at a given key
  public setNumberForKey(key: string, value: number): void {
    this._storage[key] = value;
  }

  // Method to get a number at a given key
  public getNumberForKey(key: string): number | undefined {
    return this._storage[key];
  }

  // Method to check if a key exists in the dictionary
  public hasKey(key: string): boolean {
    return key in this._storage;
  }
}

// Usage
const dynamicDict = new OptimizedDynamicNumberDictionary();
dynamicDict.setNumberForKey('one', 1);
console.log(dynamicDict.getNumberForKey('one')); // Outputs: 1
console.log(dynamicDict.hasKey('two')); // Outputs: false
