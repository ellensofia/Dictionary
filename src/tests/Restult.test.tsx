import mockData from "../mocks/mock.json";

const fetchData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

describe("Search result", () => {
  test("Users search should result be displayed", () => {});

  it("Should fetch mock data successfully", async () => {
    // Call the function that makes the HTTP request
    const data = await fetchData(
      "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
    );

    // Assert that the returned data matches the mock data
    expect(data).toEqual(mockData);
  });
});
