import { generateGlobalIdentifier } from "./generateGlobalIdentifier.js";

export async function generateURN() {
  return "urn:uuid:".concat(await generateGlobalIdentifier());
}
