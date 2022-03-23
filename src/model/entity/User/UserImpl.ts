import Pokemon from '../Pokemon/Pokemon'
import User from './User'

export default class UserImpl implements User {
  name: string
  email: string
  listOfPokemon: Pokemon[]

  constructor (name: string, email: string, listOfPokemon: Pokemon[]) {
    this.name = name
    this.email = email
    this.listOfPokemon = listOfPokemon
  }

  public static fromObject (someObject: any): User {
    const { name, email, listOfPokemon } = someObject
    return new UserImpl(name, email, listOfPokemon)
  }
}
