This repo shows a minimal replication of [this bug](https://github.com/oven-sh/bun/issues/6754).

Replication steps:

- 👍 Run `bun test` to see the tests pass
- ✍️ Increase `MAP_SIZE` ([here](https://github.com/nvie/clean-project/blob/map-equals-bug/test/bug.test.ts#L7)) to 913 or more
- 🐛 Run `bun test` to see the tests fail (most of the time)
