const { fetch } = require("whatwg-fetch");

test("Test to see if API works", () => {
  const response = fetch(
    "https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
    .then(response => response.json())
    .then(data => expect(data).not.toBeNull());
});
