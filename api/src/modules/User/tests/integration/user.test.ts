import request from "supertest";

import database from "../../../../config/database";
import App from "../../../../config/server";
import routes from "../../..";
import middlewares from "../../../../middlewares";

let server = new App(routes, middlewares);
beforeAll(async () => {
  await database.connect();
});

afterAll(async () => {
  await database.close();
});

describe("user/post", () => {
  it("should return a 201 HTTP ", async () => {
    const res = await request(server.app)
      .post("/user")
      .send({
        email: "m@GGGG.fr",
        password: "test",
        username: "test",
        address: "test",
        phone: "test",
        role: "test",
      })
      .expect(201);
    expect(res.body.email).toBe("m@GGGG.fr");
  });
});
