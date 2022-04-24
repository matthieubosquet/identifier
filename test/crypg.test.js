import { assert } from "console";
import { id, namednode, url, urn, uuid } from "../src/crypg.js";

assert(typeof(await id()) == "string");
assert(typeof((await namednode()).value) == "string");
assert(typeof((await namednode("https://example.org")).value) == "string");
assert(typeof(await url()) == "string");
assert(typeof(await urn()) == "string");
assert(typeof(await uuid()) == "string");
