import { randomUUID } from "node:crypto";

export async function uuid() {
  return randomUUID();
}
