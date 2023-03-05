const crypto = require("crypto");

// constants
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

// add hash function to convert event to partition key
function createHash(event) {
  const data = JSON.stringify(event);
  res = crypto.createHash("sha3-512").update(data).digest("hex")
  return res;
}

// add deterministicPartitionKey function to exports
exports.deterministicPartitionKey = (event) => {
  let candidate;
  if (event && event.partitionKey) {
    candidate = event.partitionKey;
  } else if (event && !event.partitionKey) {
    const data = JSON.stringify(event);
    candidate = createHash(data);
  }

  if (candidate && typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createHash(candidate);
  }
  
  return candidate;
};