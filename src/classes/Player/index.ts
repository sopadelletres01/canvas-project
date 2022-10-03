export default class Player {
  //Inventory with no duplicates
  inventory: Set<string>;
  name: string;
  constructor(name: string) {
    this.name = name;
    this.inventory = new Set();
  }

  addItem(item: string): void {
    this.inventory.add(item)
  }
}
