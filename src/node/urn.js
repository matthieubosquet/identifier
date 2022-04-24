import { uuid } from "./uuid.js";

export async function urn() {
  return "urn:uuid:".concat(await uuid());
}
