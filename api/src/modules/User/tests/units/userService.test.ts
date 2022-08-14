import { user } from "../../entity";
import UserService from "../../service";
import UserRepositoryMocks from "../mocks/userRepository.mocks";
import { CreateUser } from "../../dto";

const userService = new UserService(new UserRepositoryMocks());

const datatest: CreateUser = {
  email: "machin@gmail.com",
  password: "yes",
  username: "test",
  address: "test",
  phone: "test",
  role: "",
};

describe("user use case", () => {
  describe("add test:use case", () => {
    it("should show a new test", async () => {
      const result = await userService.register(datatest);
      expect(result.email).toBe("machin@gmail.com");
      expect(result.password).toBe("yes");
    });
  });

  it("Should throw a error if patientdata is empty or null", async () => {
    try {
      await userService.register({
        email: "",
        password: "",
        username: "",
        address: "",
        phone: "",
        role: "",
      });
    } catch (e: any) {
      expect(e.statusCode).toBe(400);
      expect(e.message).toBe(
        "Les champs email et mot de passe sont obligatoires"
      );
    }
  });

  describe("find a patient:use case", () => {
    it("should find a patient", async () => {
      const users = await userService.getAll();
      expect(users[0].email).toBe("machin@gmail.com");
    });
  });
});
