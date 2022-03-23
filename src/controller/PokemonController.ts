import PokemonService from '../service/PokemonService'
import { Request, Response } from 'express'

const pokemonService = new PokemonService()

export const doSomething = (req: Request, res: Response) => {
  const test = pokemonService.doSomething()
  res.json({ test })
}
