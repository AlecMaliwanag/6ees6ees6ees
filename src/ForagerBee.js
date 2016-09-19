import Bee from './Bee'

class ForagerBee extends Bee{
  // TODO..
  constructor () {
    super();
    this.age = 10;
    this.job = "find pollen"
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(item) {
    this.treasureChest.push(item);
  }
};

export default ForagerBee;