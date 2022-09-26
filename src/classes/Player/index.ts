export default class Player {
  name: string;
  inventory: Array<string>;
  constructor(name: string) {
    this.name = name;
    this.inventory = [];
  }
}
