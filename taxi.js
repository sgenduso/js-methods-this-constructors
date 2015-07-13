function Taxi(driverName, maxNumberOfPassengers) {
  this.driverName = driverName;
  this.maxNumberOfPassengers = Number(maxNumberOfPassengers);
  this.passengers = [];
}

Taxi.prototype.addPassenger = function(passengerName) {
  this.passengers.push(passengerName);
};

Taxi.prototype.passengerCount = function () {
  return Number(this.passengers.length);
};

Taxi.prototype.full = function () {
  if (this.passengerCount() === this.maxNumberOfPassengers) {
    return true;
  } else {
    return false;
  }
};

Taxi.prototype.dropOffPassengers = function () {
  this.passengers.length = 0;
};

// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = Taxi;
