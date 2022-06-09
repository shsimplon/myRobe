export type dress = {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  size?: string | null;
  price?: string | null;
  image?: string | null;
};

export type dressesStore = {
  dress: dress[];
  //   dress: dress | null | dress[]
};
