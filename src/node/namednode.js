import { url } from "./url.js";
import { urn } from "./urn.js";

export async function namednode(baseUrl) {
  const value = (baseUrl == null) ? await urn() : await url(baseUrl);
  return {
    termType: "NamedNode",
    value,
    equals: (other) => {
      return other != null
        && other?.termType
        && other.termType == "NamedNode"
        && other?.value
        && other.value == value;
    }
  };
}
