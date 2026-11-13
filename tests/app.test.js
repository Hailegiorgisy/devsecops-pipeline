import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import app from "../src/app.js";
// Invented test credential for Task 3 demonstration
export const TEST_KEY = "AKIAIOSFODNN7EXAMPLE";

let server;
let baseUrl;

before(async () => {
  await new Promise((resolve) => {
    server = app.listen(0, () => {
      const { port } = server.address();
      baseUrl = `http://127.0.0.1:${port}`;
      resolve();
    });
  });
});

after(() => {
  server.close();
});

describe("API Endpoints", () => {
  it("GET /health returns 200 and ok status", async () => {
    const res = await fetch(`${baseUrl}/health`);
    const body = await res.json();
    assert.equal(res.status, 200);
    assert.equal(body.status, "ok");
  });

  it("GET /api/items returns 200 and list of items", async () => {
    const res = await fetch(`${baseUrl}/api/items`);
    const body = await res.json();
    assert.equal(res.status, 200);
    assert.equal(body.count, 2);
  });
});