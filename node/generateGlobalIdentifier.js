import { randomUUID } from "node:crypto";

export async function generateGlobalIdentifier() {
  return randomUUID();
}
