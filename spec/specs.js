describe('factorial', function() {
  it("is 1 for 0", function() {
    expect(factorial(0)).to.equal(1);
  });

  it("is 120 for 5", function() {
    expect(factorial(5)).to.equal(120);
  });
});
