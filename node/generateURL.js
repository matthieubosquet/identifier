import { generateLocalIdentifier } from "./generateLocalIdentifier.js";

export async function generateURL(baseUrl = "https://example.org/") {
  return baseUrl.concat(await generateLocalIdentifier());
}
