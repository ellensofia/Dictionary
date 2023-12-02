import { http, HttpResponse } from "msw";
import mockData from "../mocks/mock.json"; // Import your mock data

export const handlers = [
  http.get("https://api.dictionaryapi.dev/api/v2/entries/en/hello", () => {
    return HttpResponse.json(mockData, { status: 200 });
  }),
];
