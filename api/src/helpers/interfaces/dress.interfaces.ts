import { DressDTO } from "../../modules/Dress/dto";
import { Dress } from "../../modules/Dress/entity";

export interface IDressService {
  delete(dress: Dress): Promise<string>;
  update(dress: Dress): Promise<Dress>;
  getOne(dress: Dress): Promise<DressDTO>;
  register(user: DressDTO): Promise<DressDTO>;
  getAll(): Promise<DressDTO[]>;
}
export interface IDressRepoqitory {
  getOne(dress: Dress): Promise<any>;
  delete(dressId: Dress): Promise<any>;
  register(dress: Dress): Promise<Dress>;
  getAll(): Promise<Dress[]>;
  update(dress: Dress): Promise<any>;
}
