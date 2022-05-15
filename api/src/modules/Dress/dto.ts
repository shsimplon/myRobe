export class DressDTO {
  public id: string;
  public name: string;
  public description: string;
  public size: string;
  public price: string;

  public image?: string;

  constructor({
    id,
    name,
    description,
    size,
    price,
    image,
  }: {
    id: string;
    name: string;
    description: string;
    size: string;
    price: string;
    image?: string;
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.size = size;
    this.price = price;
    this.image = image;
  }
}
