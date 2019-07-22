var RetiredForagerBee = function() {
  Bee.call(this);
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
}

RetiredForagerBee.prototype.eat = function() {
  _.extend(this, grub);
}

RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
}