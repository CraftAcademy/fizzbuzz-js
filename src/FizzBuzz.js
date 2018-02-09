function FizzBuzz(){
}

FizzBuzz.prototype.divisibleByThree = function(num) {
  if (num%3 === 0) {
    return "Fizz";
  }
};

FizzBuzz.prototype.fizzBuzz = function(num) {
  divisibleByThree(num);
};
