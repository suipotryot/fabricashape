import {fabric} from 'fabric'

export class Arrowline extends fabric.Group {

    constructor() {
        const body = new fabric['Rect']({ top: 6, left: 0, width: 80, height: 7, fill: 'blue'})
        const leftTriangle = new fabric['Triangle']({ top: 19, left: -18, width: 18, height: 18, fill: 'blue', angle: -90})
        const rightTriangle = new fabric['Triangle']({ top: 0, left: 80+18, width: 18, height: 18, fill: 'blue', angle: 90})
        super([body, leftTriangle, rightTriangle]);
    }
}

