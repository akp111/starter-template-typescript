import 'dotenv/config'
import "reflect-metadata"
import "./controller/subscribers"
import { App } from './app'
import { container } from './di-container'

export async function bootstrap() {
    container.get(App).setup()
}


bootstrap()