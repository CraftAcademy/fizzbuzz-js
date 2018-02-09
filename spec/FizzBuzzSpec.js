describe("FizzBuzz", function() {
  it("return number", function() {
    expect (fizzBuzz(1)).toEqual(1);
  });

  it("returns Fizz if number is divisible by three",function(){
    expect(fizzBuzz(3)).toEqual("Fizz");
  });

  it("returns Buzz if number is divisible by five",function(){
    expect(fizzBuzz(5)).toEqual("Buzz");
  });

  it("returns FizzBuzz if number is divisible by 15",function(){
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });

});
