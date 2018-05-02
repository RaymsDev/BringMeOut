import { ICoordinates } from "./coordinates.model";
export interface ILocation {
  address: string;
  coordinates?: ICoordinates;
}

export class Location implements ILocation {
  public address: string;
  public coordinates: ICoordinates;

  constructor(data: Partial<ILocation>) {
    if (!data) {
      return;
    }

    this.address = data.address ? data.address : "";
    this.coordinates = data.coordinates ? data.coordinates : null;
  }
}
