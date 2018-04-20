const FizzBuzz = {
  eval(number) {
    if (is_dividable_by(number,15)) {
      return 'FizzBuzz';
    } else if (is_dividable_by(number,3)){
      return 'Fizz';
    } else if (is_dividable_by(number,5)){
      return 'Buzz';
    } else {
      return number;
    }
  }
};

function  is_dividable_by(number , factor){
  return number % factor == 0;
};

export default FizzBuzz;
