import Pokemon from '../Pokemon/Pokemon'

export default interface User {
  name: string
  email: string
  listOfPokemon: Pokemon[]
}
