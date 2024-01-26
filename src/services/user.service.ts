import { User } from "../types";
import UserModel from "../models/user.model";
import logger from "../helpers/logger";

export class UsersService {
  public async get(id: number): Promise<User | undefined> {
    return UserModel.query().findById(id);
  }

  public async create(
    userCreationParams:Omit<User,"id">
  ): Promise<User | void> {
    try {
      const newUser = await UserModel.query().insertAndFetch(
        userCreationParams
      );
      return newUser;
    } catch (e) {
      return logger.error(e);
    }
  }

  public async getUsers(): Promise<User[]> {
    return UserModel.query();
  }

  public async delete(id: number): Promise<User[]> {
    await UserModel.query().deleteById(id);
    return UserModel.query();
  }
}
