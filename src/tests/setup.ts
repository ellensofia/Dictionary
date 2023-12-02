import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "../mocks/node";

beforeAll(() => server.listen());
afterAll(() => server.close());

// Clears jsdom after each test
afterEach(() => {
  cleanup();
});
