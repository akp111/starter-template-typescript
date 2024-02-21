import { injectable } from "inversify";
import mongoose from "mongoose";
import { container } from "./di-container";
import { subscribersModel } from "./model/subscribers";

@injectable()
export class Db {
    private _db: typeof mongoose
    async connect() {
        this._db = await mongoose.connect(process.env.DB_URI!)
        console.log("connected to db")
    }

    get subscribers() {
        return this._db.model("Subscriber", subscribersModel)
    }
}
