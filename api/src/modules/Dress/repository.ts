import { EntityManager, EntityRepository } from "typeorm";
import { IDressRepoqitory } from "../../helpers/interfaces/dress.interfaces";
import { Dress } from "./entity";

@EntityRepository()
class DressRepository implements IDressRepoqitory {
  constructor(private manager: EntityManager) {}

  async register(dress: Dress) {
    return await this.manager.save(Dress, dress);
  }
  async getAll() {
    return await this.manager.find(Dress);
  }

  async getOne(dress: Dress) {
    return await this.manager.findOne(Dress, dress.id);
  }

  async update(dress: Dress) {
    return await this.manager.update(Dress, dress.id, { ...dress });
  }

  async delete(dress: Dress) {
    return await this.manager.delete(Dress, dress.id);
  }
}

export default DressRepository;
