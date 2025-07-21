import { test, expect } from "@playwright/test";

const headers = {
  "x-api-key": "reqres-free-v1",
};

// GET Request
test("GET User Info", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/1", {
    headers,
  });
  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain("George");
  console.log(await response.json());
});

// POST Request
test("POST API with x-api-key header", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    headers,
    data: {
      name: "Hoai",
      job: "tester",
    },
  });
  expect(response.status()).toBe(201);
  const text = await response.text();
  expect(text).toContain("Hoai");
  console.log(await response.json());
});

// PUT Request
test("PUT API with x-api-key header", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/2", {
    headers,
    data: {
      name: "Hoai xinh",
      job: "Automation Test",
    },
  });
  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain("Hoai xinh");
  console.log(await response.json());
});

// DELETE Request
test("DELETE API with x-api-key header", async ({ request }) => {
  const response = await request.delete("https://reqres.in/api/users/2", {
    headers,
  });
  expect(response.status()).toBe(204);
});
