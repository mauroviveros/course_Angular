export interface Heroe {
  id?:              string;
  superhero:        string;
  publisher:        Publisher;
  alter_ego:        string;
  first_appearance: string;
  characters:       string;
  alt_img?:          string;
};

export interface PublisherDescription{
  id: Publisher,
  description: string
};

export enum Publisher {
  DCComics = "DC Comics",
  MarvelComics = "Marvel Comics",
};

