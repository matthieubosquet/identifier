import { randomBytes } from "node:crypto";

export async function generateLocalIdentifier() {
  const size = 20;
  const symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const random = randomBytes(size);
  let id = "";
  for (let i = 0; i < size; i++) {
    // TODO: understand if bit masking skews the random repartition
    id += symbols[random[i] & symbols.length - 1];
  };
  return id;
}
