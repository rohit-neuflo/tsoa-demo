import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Route,
  SuccessResponse,
  Tags,
} from "tsoa";
import { User } from "../types";
import { UsersService } from "../services/user.service";

@Route("users")
@Tags("Users")
export class UsersController extends Controller {
  @Get("{userId}")
  public getUser(@Path() userId: number) {
    this.setStatus(200);
    return new UsersService().get(userId);
  }

  @Get()
  public async getUsers(): Promise<User[]> {
    this.setStatus(200);
    return new UsersService().getUsers();
  }

  @Post()
  @SuccessResponse("201", "Created")
  public async createUser(@Body() requestBody: Omit<User, "id">) {
    this.setStatus(201);
    new UsersService().create(requestBody);
  }

  @Delete("{userId}")
  public async deleteUser(@Path() userId: number) {
    this.setStatus(201);
    new UsersService().delete(userId);
  }
}
