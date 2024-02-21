import { injectable } from "inversify";

@injectable()
export abstract class Application {
    abstract setup(): Promise<void> | void
}