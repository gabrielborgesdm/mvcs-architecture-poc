import express from 'express'
import { doSomething } from './controller/PokemonController'

const routes = express()

routes.get('/', (req, res) => doSomething(req, res))

export default routes
