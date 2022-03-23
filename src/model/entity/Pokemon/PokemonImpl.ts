import Pokemon from './Pokemon'

export class PokemonImpl implements Pokemon {
    id: number;
    name: string;
    image: string;

    constructor (id: number, name: string, image: string) {
      this.id = id
      this.name = name
      this.image = image
    }

    public static fromObject (someObject: any): Pokemon {
      const { id, name, image } = someObject
      return new PokemonImpl(id, name, image)
    }
}
