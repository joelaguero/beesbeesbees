var ForagerBee = function() {
  HoneyMakerBee.call(this);
  this.age = 10;
};

ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);
ForagerBee.prototype.constructor = ForagerBee;



