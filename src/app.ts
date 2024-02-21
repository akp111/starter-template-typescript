import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './di-container'
import express from 'express';
import { injectable } from 'inversify';
import { Db } from './db';
import { Application } from './abstract/app';

@injectable()
export class App extends Application {
    async setup(){
      const _db = container.get(Db)
      await _db.connect()
        const server = new InversifyExpressServer(container);
        server.setConfig((app)=>{
          app.use(express.json())
        })
        const app = server.build()
        app.listen(process.env.PORT, ()=>{
          console.log("Server is running on port "+process.env.PORT)
        })
    }
}

container.bind(App).toSelf()