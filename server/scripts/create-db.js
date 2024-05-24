import { connection } from "../db/connection.js";

await connection.schema.dropTableIfExists("user");
await connection.schema.dropTableIfExists("message");

await connection.schema.createTable("user", (table) => {
  table.text("username").notNullable().primary();
  table.text("password").notNullable();
});

await connection.schema.createTable("message", (table) => {
  table.text("id").notNullable().primary();
  table.text("user").notNullable();
  table.text("text").notNullable();
  table.text("createdAt").notNullable();
});

await connection.table("message").insert([
  {
    id: "m00000000001",
    user: "system",
    text: "Welcome to the NoviSlack chat!",
    createdAt: "2024-05-24T11:00:00.000Z",
  },
]);

await connection.table("user").insert([
  {
    username: "madava",
    password: "madava123",
  },
  {
    username: "bob",
    password: "bob123",
  },
  {
    username: "jhovs",
    password: "jhovs123",
  },
]);

process.exit();
