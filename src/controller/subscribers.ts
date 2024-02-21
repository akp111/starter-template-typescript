import { controller, httpGet, response } from "inversify-express-utils";
import { Request, Response } from "express";
import { SubscribersService } from "../service/subscribers";

@controller("/subscribers")
export class SubscribersController {
    constructor(private readonly subscribersService: SubscribersService) { }
    @httpGet("/")
    async getAll(req: Request, res: Response) {
        res.send(await this.subscribersService.findAll())
    }

}