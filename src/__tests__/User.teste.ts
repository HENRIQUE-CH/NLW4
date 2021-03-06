import e from "express";
import request from "supertest";
import { createConnection } from "typeorm";
import { app } from "../app";

describe("Users", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it("Should be able to create a new user", async () => {
    const response = await request(app).post("/users").send({
      email: "user@exemple.com",
      name: "User exemplo",
    });

    expect(response.status).toBe(201);
  });

  it("Shout be able to create a user with exists email", async () => {
    const response = await request(app).post("/users").send({
      email: "user@exemple.com",
      name: "User exemplo",
    });

    expect(response.status).toBe(400);
  });
});
