test("bug", () => {
  expect(2).toBeLessThan(1);
  expect(1).toBeLessThan(2);
  console.log("I passed somehow");
});
