This repo shows a minimal replication of [this bug](https://github.com/oven-sh/bun/issues/6754).

- 👍 Run `bun test` to see things correctly fail. (**Expected!**)
- 👎 Run `npx turbo run test` to see things pass incorrectly. (**Bug!** 🐛)
