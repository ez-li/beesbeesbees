var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype.eat = function() {
  _.extend(this, grub);
}

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
}

