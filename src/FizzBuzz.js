function FizzBuzz(){
}

FizzBuzz.prototype.divisibleByThree = function(num) {
  (num%3 === 0);

FizzBuzz.prototype.fizzBuzz = function(num) {
  if (this.divisibleByThree(num)) {
    return "Fizz"
  };
};
