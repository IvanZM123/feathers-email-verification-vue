import { AuthenticationClient } from "@feathersjs/authentication-client/lib";
import { Auth, UserService } from "@/config/feathers";

export interface User {
  _id: string;
  email: string;
  password: string;
  fullname: string;
}

export interface AuthResult {
  accessToken: string;
  authentication: {
    strategy: string;
  };
  user: User;
}

export class AuthService {
  private readonly auth: AuthenticationClient;

  constructor() {
    this.auth = Auth;
  }

  async login(email: string, password: string): Promise<AuthResult> {
    return this.auth.authenticate({
      strategy: "local",
      email,
      password,
    }) as Promise<AuthResult>;
  }

  async signup(user: Omit<User, "_id">): Promise<User> {
    return await UserService.create(user);
  }
}
