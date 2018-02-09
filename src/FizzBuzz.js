function FizzBuzz(){
}

FizzBuzz.prototype.divisibleByThree = function(num) {
  return this.fullyDivisible(num, 3);
};

FizzBuzz.prototype.divisibleByFive = function(num) {
  return this.fullyDivisible(num, 5);
};

FizzBuzz.prototype.divisibleByBoth = function(num) {
  return this.fullyDivisible(num, 15);
};

FizzBuzz.prototype.result = function(num) {
  if (this.divisibleByBoth(num)) {
    return "FizzBuzz";
  } else if (this.divisibleByFive(num)) {
    return "Buzz";
  } else if (this.divisibleByThree(num)){
    return "Fizz";
  }
};

FizzBuzz.prototype.fullyDivisible = function(num, divisor){
  return (num % divisor === 0);
};
