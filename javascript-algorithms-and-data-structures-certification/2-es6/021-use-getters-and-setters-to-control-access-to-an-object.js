// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    // initial value in Fahrenheit
    this._fahrenheit = fahrenheit;
  }

  get temperature() {
    // getter converts Fahrenheit value to Celsius
    return 5 / 9 * (this._fahrenheit - 32);
  }

  set temperature(celsius) {
    /* this FEELS really hacky -- setter converts user-set Celsius value
    to Fahrenheit, so getter can *re*covert to Celsius */
    this._fahrenheit = celsius * 9 / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
