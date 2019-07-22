var HoneyMakerBee = function()
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype.eat = function() {
  _.extend(this, Grub.prototype);
}

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot ++;
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot --;
}