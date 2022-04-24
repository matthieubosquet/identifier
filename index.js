import { generateGlobalIdentifier } from "./node/generateGlobalIdentifier.js";
import { generateLocalIdentifier } from "./node/generateLocalIdentifier.js";
import { generateURL } from "./node/generateURL.js";
import { generateURN } from "./node/generateURN.js";

console.log(await generateURL());
