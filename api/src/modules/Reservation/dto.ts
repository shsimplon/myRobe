export class ReservationDTO {
  public id: string;
  public date_departure: string;
  public return_date: string;
  public quantity?: number;

  constructor({
    id,

    date_departure,
    return_date,
    quantity,
  }: {
    id: string;

    date_departure: string;
    return_date: string;
    quantity?: number;
  }) {
    this.id = id;

    this.date_departure = date_departure;
    this.return_date = return_date;
    this.quantity = quantity;
  }
}
