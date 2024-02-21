import { inject, injectable } from "inversify";
import { Db } from "../db";

@injectable()
export class SubscribersRepository {
    // constructor(private readonly _dbContect: Db) { }
    private _dbContext: Db
    constructor(@inject(Db) _dbContext: Db) { 
        this._dbContext = _dbContext
    }

    async findAll() {
        const result = await this._dbContext.subscribers.find()
        return result
    }

}