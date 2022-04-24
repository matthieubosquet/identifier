import { id } from "./id.js";

export async function url(baseUrl = "https://example.org/") {
  return new URL(baseUrl).toString().concat(await id());
}
