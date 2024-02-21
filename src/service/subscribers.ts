import { SubscribersRepository } from "../repository/subscribers";
import { inject, injectable } from "inversify";

@injectable()
export class SubscribersService {

    constructor(private readonly subscribersRepo: SubscribersRepository){}

    async findAll() {
        return this.subscribersRepo.findAll()
    }
}