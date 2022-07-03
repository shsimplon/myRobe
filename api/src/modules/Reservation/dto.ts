export class ReservationDTO {
  public id: string;

  public date_departure!: string;
  public reurn_date: string;

  constructor({
    id,

    date_departure,
    reurn_date,
  }: {
    id: string;

    date_departure: string;
    reurn_date: string;
  }) {
    this.id = id;

    this.date_departure = date_departure;
    this.reurn_date = reurn_date;
  }
}
