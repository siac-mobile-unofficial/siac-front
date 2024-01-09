export default class PointUFBA {
    constructor(lat,long,zoom) {
        this.type = "POINT",
            this.data = {
                lat: lat,
                zoom: zoom,
                long:long
            }

    }
}