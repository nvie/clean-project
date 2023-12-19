//
// NOTE:
// - At <= 912 elements, the test always passes
// - At > 912 elements, the test starts failing significantly more
// - ...but not _always_
//
const MAP_SIZE = 913;

function* genpairs() {
  for (let i = 0; i < MAP_SIZE; i++) {
    yield ["k" + i, 1] as const;
  }
}

test("two equal maps should be equal, no matter how large", () => {
  const x = new Map(genpairs());
  const y = new Map(genpairs());
  expect(x).toEqual(y);
});
