var Taxi = require('../taxi');

describe('properties', function() {
  var cab = new Taxi("Phil Collins", 6);

  xit('has a String driverName', function() {
    expect(cab.driverName).toEqual('Phil Collins');
  });

  xit('has an integer maxNumberOfPassengers', function() {
    expect(cab.maxNumberOfPassengers).toEqual(6);
  });
});

describe('#addPassenger', function() {
  var cab;

  beforeEach(function() {
    cab = new Taxi("Phil Collins", 6);
  });

  xit('takes a String argument for the passengerName', function() {
    cab.addPassenger('Tom Collins');
    expect(cab.passengers).toEqual(['Tom Collins']);
  });

  xit('correctly handles multiple passengers', function() {
    cab.addPassenger('Tom Collins');
    cab.addPassenger('Bob Collins');
    expect(cab.passengers).toEqual(['Tom Collins', 'Bob Collins']);
  });
});

describe('#passengerCount', function() {
  xit('returns the number of passengers in the Taxi instance', function() {
    var cab = new Taxi('Ringo Starr', 4);
    cab.addPassenger('Paul McCartney');
    cab.addPassenger('John Lennon');
    cab.addPassenger('George Harrison');

    expect(cab.passengerCount()).toEqual(3);
  });

  xit('returns 0 when there are no passengers in the Taxi instance', function() {
    var cab = new Taxi('Ringo Starr', 4);

    expect(cab.passengerCount()).toEqual(0);
  });
});

describe('#full', function() {
  var cab;

  beforeEach(function() {
    cab = new Taxi('Ringo Starr', 4);
    cab.addPassenger('Paul McCartney');
    cab.addPassenger('John Lennon');
    cab.addPassenger('George Harrison');
  });

  xit('returns true when the passengerCount is at the maximum number of passengers', function() {
    cab.addPassenger('Yoko Ono');

    expect(cab.full()).toBe(true);
  });

  xit('returns false when there are less passengers than there is space for passengers', function() {
    expect(cab.full()).toBe(false);
  });
});

describe('#dropOffPassengers', function() {
  xit('removes all stored passengers from the Taxi instance', function() {
    var cab = new Taxi('Ringo Starr', 4);
    cab.addPassenger('Paul McCartney');
    cab.addPassenger('John Lennon');
    cab.addPassenger('George Harrison');

    cab.dropOffPassengers();

    expect(cab.passengers).toEqual([]);
  });
});
