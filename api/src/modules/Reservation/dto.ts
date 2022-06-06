export class ReservationDTO {
  public id: string;
  public name: string;
  public tel: string;
  public email: string;
  public date_departure!: string;
  public reurn_date: string;

  constructor({
    id,
    name,
    tel,
    email,
    date_departure,
    reurn_date,
  }: {
    id: string;
    name: string;
    tel: string;
    email: string;
    date_departure: string;
    reurn_date: string;
  }) {
    this.id = id;
    this.name = name;
    this.tel = tel;
    this.email = email;
    this.date_departure = date_departure;
    this.reurn_date = reurn_date;
  }
}
