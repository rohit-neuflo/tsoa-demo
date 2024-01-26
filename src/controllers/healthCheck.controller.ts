import { Get, Route, Controller, Tags } from "tsoa";

@Tags("Health Check")
@Route("healthCheck")
export class HealthCheckController extends Controller {
  @Get("/")
  public getHealth() {
    this.setStatus(200);
    return "OK";
  }
}
