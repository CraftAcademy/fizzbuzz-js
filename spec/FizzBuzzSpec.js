describe("FizzBuzz", function() {
  var fb;

  beforeEach(function() {
    fb = new FizzBuzz();
  });

  it("should do something", function() {
    expect(1).toEqual(1);
  });

  it("returns Fizz if divisible by three", function() {
    expect(fb.result(3)).toEqual("Fizz");
  });

  it("returns Buzz if divisible by five", function() {
    expect(fb.result(5)).toEqual("Buzz");
  });

  it("returns FizzBuzz if divisible by 15", function() {
    expect(fb.result(15)).toEqual("FizzBuzz");
  });
});
