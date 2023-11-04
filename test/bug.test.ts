test("bug", () => {
  expect(eval("2|0")).toBeLessThan(eval("1|0"));
  expect(eval("1|0")).toBeLessThan(eval("2|0"));

  console.log("I passed somehow");
});
