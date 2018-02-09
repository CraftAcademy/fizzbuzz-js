function FizzBuzz(v) {
  if (v % 15 === 0)
    return "FizzBuzz";
  else if (v % 5 === 0)
    return "Buzz";
  else if (v % 3 === 0)
    return "Fizz";
  else
    return v;
};
