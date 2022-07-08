import {
  Controller,
  Delete,
  Get,
  Middleware,
  Post,
  Put,
} from "@overnightjs/core";
import { validateFunctionCode } from "ajv/dist/compile/validate";
import validation from "ajv/dist/vocabularies/validation";
import { Request, Response, NextFunction } from "express";
import { IUserService } from "../../helpers/interfaces/user.interfaces";
import JwtService from "../../libs/jwt";
import { auth } from "../../middlewares";
import { UserDTO } from "./dto";

@Controller("user")
class UserController {
  private userService;
  private jwtService;
  constructor(userService: IUserService, jwtService: JwtService) {
    this.userService = userService;
    this.jwtService = jwtService;
  }

  @Post()
  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.register({ ...req.body });
      console.log("user,", user);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  };
  @Get()
  //   @Middleware(auth.isAuth)
  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let users = await this.userService.getAll();
      const result = users.map((user) => user);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
  @Post("login")
  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.login({ ...req.body });

      const access_token = await this.jwtService.generateAccessToken(user);
      console.log(access_token);

      const refresh_token = this.jwtService.generateRefreshToken(user.id);
      console.log("login: ", refresh_token);

      const nextMonhteDate = new Date(Date.now() + 30 * 86400 * 1000);
      res.cookie("refresh_token", refresh_token, {
        expires: nextMonhteDate,
        httpOnly: true,
      });
      res.status(200).json({ ...user, access_token });
    } catch (err) {
      next(err);
    }
  };
  //une route pour generer un refrech token
  @Get("auth/refresh")
  refrech = async (req: Request, res: Response, next: NextFunction) => {
    try {
      //recuperer le token via les cookies
      const refresh_token = req.cookies["refresh_token"];
      if (!refresh_token)
        return res.status(498).json("access denied, your session is expired");

      //verifier le token
      const decoded = await this.jwtService.decodeToken(refresh_token);
      let user = await this.userService.getById(decoded.id);
      const access_token = await this.jwtService.generateAccessToken(user);
      // if the user has permissions

      res.status(200).json(new UserDTO({ ...user, access_token }));
    } catch (e) {
      return res.status(401).json("Authentication failed : \n" + e);
    }
  };

  @Get(":id")
  @Middleware(auth.isAuth)
  getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.getOne({ ...req.body });

      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  };

  @Get("logout")
  logout = async (req: Request, res: Response, next: NextFunction) => {
    res.clearCookie("refresh_token");
    res.status(200).end();
  };
  @Put()
  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.update({ ...req.body });

      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  };
  @Delete(":id")
  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.delete({ ...req.body });

      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  };
}
export default UserController;
