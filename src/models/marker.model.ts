export interface IMarker {
  name: string;
  icon: string;
}

export class Marker implements IMarker {
  name: string;
  icon: string;

  constructor(data ? : Partial < IMarker > ) {
    if (!data) {
      this.name = null;
      this.icon = null;
      return;
    }

    this.name = data.name ? data.name : null;
    this.icon = data.icon ? data.icon : null;
  }
}
