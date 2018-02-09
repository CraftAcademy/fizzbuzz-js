describe("FizzBuzz", function() {
  it("should do something", function() {
    expect(1).toEqual(1);
  });

  it("returns Fizz if divisible by three", function() {
    expect(FizzBuzz(3)).toEqual("Fizz");
  });

  it("returns Buzz if divisible by five", function() {
    expect(FizzBuzz(5)).toEqual("Buzz");
  });
  
});
