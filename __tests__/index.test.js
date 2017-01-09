const kvstore = require("../index.js");

it("returns key", () => {
  expect(kvstore.get("conny")).toBe("Get value for key conny");
});

it("sets key", () => {
  expect(kvstore.set("Sune", "Hjort")).toBe("Setting value Hjort for key Sune");
});
