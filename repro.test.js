import { it, describe } from "vitest";

describe("the problem", () => {
  beforeEach((ctx) => {
    ctx.foo = true;
  });

  afterEach((ctx) => {
    ctx.foo = false;
  });

  it("runs a test", ({ foo }) => {
    expect(foo).toBeTruthy();
  });
});
