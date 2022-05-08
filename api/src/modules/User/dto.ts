import Ajv, { JSONSchemaType } from "ajv";
const ajv = new Ajv();
//interface user
export interface UserInterface {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  password: string;
}
const schema = {
  type: "object",

  properties: {
    id: { type: "string" },
    name: { type: "string" },
    address: { type: "string", nullable: true },
    phone: { type: "string", nullable: true },
    email: { type: "string" },
    password: { type: "string" },
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
  "id" | "name" | "email" | "password"
>;
export type DeleteUser = Pick<UserInterface, "id">;
export type UpdateUser = Partial<UserInterface>;

//class dto

export class UserDTO {
  public id: string;
  public name: string;
  public address?: string;
  public phone?: string;
  public email: string;
  public password: string;
  public access_token?: string;
  constructor({
    id,
    name,
    address,
    phone,
    email,
    password,
    access_token,
  }: {
    id: string;
    email: string;
    address?: string;
    phone?: string;
    access_token?: string;
    name: string;
    password: string;
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.access_token = access_token;
    this.address = address;
    this.phone = phone;
    this.password = password;
  }
}
