import { ApiError } from "../../helpers/ApiError";
import {
  IDressRepoqitory,
  IDressService,
} from "../../helpers/interfaces/dress.interfaces";
import { Dress } from "./entity";

export default class DressService implements IDressService {
  private dressRepository;
  constructor(dressRepository: IDressRepoqitory) {
    this.dressRepository = dressRepository;
  }

  async getOne(dressId: Dress) {
    const dress = await this.dressRepository.getOne(dressId);
    if (!dress) {
      throw new Error("dress introvable");
    }
    return dress;
  }
  async delete(dressId: Dress) {
    const dressDeleted = await this.getOne(dressId);

    await this.dressRepository.delete(dressId);

    return `Dress n°${dressId.id} supprimée.`;
  }
  async getAll() {
    const dresses = await this.dressRepository.getAll();
    if (!dresses) {
      throw new Error("Aucune robe dans la base de données");
    }
    return dresses;
  }

  async update(dress: Dress) {
    const dressData = await this.getOne(dress);
    console.log("dressData", dressData);

    if (!dressData) {
      throw new Error("dress introuvable.");
    }
    if (dress === dressData) {
      throw new Error("dress identique ou déjà modifiée.");
    }
    await this.dressRepository.update(dress);
    const dressUpdated = await this.getOne(dress);
    return dressUpdated;
  }

  async register(dress: Dress) {
    const dressSaved = await this.dressRepository.register(dress);

    return dressSaved;
  }
}
