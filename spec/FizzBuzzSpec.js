// In this we want all numbers to return their number, expect:
// numbers which can divided by 15, 5 or 3, to return "FizzBuzz", "Buzz" and "Fizz"

describe("FizzBuzz", function() {
  it("returns 1 if number is 1", function() {
    expect(FizzBuzz(1)).toEqual(1);
  });

  it("returns 2 if number is 2", function() {
    expect(FizzBuzz(2)).toEqual(2);
  });

  it("returns Fizz if number is 3", function() {
    expect(FizzBuzz(3)).toEqual("Fizz");
  });

  it("returns Buzz if number is 5", function() {
    expect(FizzBuzz(5)).toEqual("Buzz");
  });

  it("returns FizzBuzz if number is 15", function() {
    expect(FizzBuzz(15)).toEqual("FizzBuzz");
  });
});
