import { http, HttpResponse } from "msw";
import mockData from "../mocks/mock.json"; // Import your mock data

export const handlers = [
  http.get("https://api.dictionaryapi.dev/api/v2/entries/en/hello", () => {
    // Find the mock data for the word "hello"
    const helloData = mockData.find((item) => item.word === "hello");

    // Return the mock data for the "hello" word
    // Using HttpResponse.json() to construct the response
    return HttpResponse.json(helloData ? [helloData] : []);
  }),
];
