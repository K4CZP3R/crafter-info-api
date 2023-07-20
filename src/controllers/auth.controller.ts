import { authJwtMiddleware } from "../middlewares/auth.middleware";
import { IResult } from "../models/interfaces/result.interface";
import { RouteData } from "../types/route.type";
import { BaseController } from "./base.controller";

export class AuthController extends BaseController {
  constructor() {
    super("/auth");
    this.initialize(
      [
        {
          path: "/",
          method: "get",
          func: this.meRoute.bind(this),
        },
      ],
      [authJwtMiddleware]
    );
  }

  meRoute(data: RouteData): Promise<IResult<unknown>> {
    return Promise.resolve({
      data: data.session,
    });
  }
}
