import crypto from "crypto";

export const randomKey = () =>
  typeof window !== "undefined"
    ? window.crypto.randomUUID()
    : crypto.randomUUID();
