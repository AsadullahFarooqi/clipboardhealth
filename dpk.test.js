const assert = require("assert");
const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("returns the trivial partition key if no candidate is found", () => {
    const result = deterministicPartitionKey(undefined);
    assert.strictEqual(result, "0");
  });

  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});
