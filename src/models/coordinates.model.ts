export interface ICoordinates {
    lat: number,
    lng: number
}

export class Coordinates implements ICoordinates{
    lat: number;
    lng: number;
    constructor(data?: Partial<ICoordinates>){
        if(!data){
            this.lat = null;
            this.lng = null;
            return;
        }

        this.lat = data.lat ? data.lat : null;
        this.lng = data.lng ? data.lng : null;
    }

    public static fromPosition(position: Position):ICoordinates{

        const coordinates = new Coordinates();
        coordinates.lat = position.coords.latitude ? position.coords.latitude : null;
        coordinates.lng = position.coords.longitude ? position.coords.longitude : null;
        return coordinates;
    }
}
