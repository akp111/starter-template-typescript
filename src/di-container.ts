import { Container } from 'inversify'
import { Db } from './db'
import { SubscribersRepository } from './repository/subscribers'
import { SubscribersService } from './service/subscribers'

export const container = new Container({
    defaultScope: "Singleton"
})

container.bind(Db).toSelf()
container.bind(SubscribersRepository).toSelf()
container.bind(SubscribersService).toSelf()