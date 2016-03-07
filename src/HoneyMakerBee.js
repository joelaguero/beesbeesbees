var HoneyMakerBee = function() {
  Bee.call(this);
  
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

