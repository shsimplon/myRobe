import Ajv, { JSONSchemaType } from "ajv";
const ajv = new Ajv();
//interface user
export interface UserInterface {
  id: string;
  username: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  role: string;
}
const schema = {
  type: "object",

  properties: {
    id: { type: "string" },
    username: { type: "string" },
    address: { type: "string", nullable: true },
    phone: { type: "string", nullable: true },
    email: { type: "string" },
    password: { type: "string" },
    role: { type: "string", nullable: true },
  },
  required: ["email", "password"],
  additionalProperties: false,
};

const validate = ajv.compile<UserInterface>(schema);

module.exports = validate;

console.log("validate.errors", validate.errors);

export type CreateUser = Omit<UserInterface, "id">;
export type LoginUser = Pick<
  UserInterface,
  "id" | "username" | "email" | "password"
>;
export type DeleteUser = Pick<UserInterface, "id">;
export type UpdateUser = Partial<UserInterface>;

//class dto

export class UserDTO {
  public id: string;
  public username: string;
  public address?: string;
  public phone?: string;
  public email: string;
  public password: string;
  public role?: string;

  public access_token?: string;
  constructor({
    id,
    username,
    address,
    phone,
    email,
    password,
    role,
    access_token,
  }: {
    id: string;
    email: string;
    address?: string;
    phone?: string;
    access_token?: string;
    username: string;
    role?: string;
    password: string;
  }) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.access_token = access_token;
    this.address = address;
    this.phone = phone;
    this.role = role;

    this.password = password;
  }
}
