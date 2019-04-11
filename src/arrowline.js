import {fabric} from 'fabric'
import {Line} from './line'

/**
 * An Arrowline is a group that looks like a double arrowed line:
 *       <------->
 */
export class Arrowline extends Line {

    constructor(options) {
        super(options)
        this.type = 'arrowline'
        this.bodyFill = options.fill
    }

    _initComponents() {
        this.text = new fabric.Text('', {backgroundColor: 'white'})
        this.body = new fabric.Rect({fill: this.bodyFill})
        this.leftTriangle = new fabric.Triangle({fill: this.bodyFill})
        this.rightTriangle = new fabric.Triangle({fill: this.bodyFill})

        this._setComponentsPosition()

        this.components = [this.body, this.leftTriangle, this.rightTriangle, this.text]

        this.components.forEach((component) => {
            component.hasControls = false
            component.selectable = false
            this.canvas.add(component)
            component.sendBackwards()
        })
        this.setText(this.bodyText)
    }

    _setComponentsPosition() {
        const degreesToRadiansRatio = Math.PI / 180,
            height = this.height * this.scaleY,
            width = this.width * this.scaleX,
            cosTeta = Math.cos(this.angle * degreesToRadiansRatio),
            sinTeta = Math.sin(this.angle * degreesToRadiansRatio),
            boundingRect = this.getBoundingRect()

        this.text.set({
            top: boundingRect.top + 0.5 * (boundingRect.height - this.text.height),
            left: boundingRect.left + 0.5 * (boundingRect.width - this.text.width),
            fontSize: 18
        })

        this.body.set({
            top: this.top + height * sinTeta + (height / 4) * cosTeta,
            left: this.left + height * cosTeta - (height / 4) * sinTeta,
            width: width - 2 * height,
            height: height / 2,
            angle: this.angle
        })

        this.leftTriangle.set({
            top: this.top + height * cosTeta,
            left: this.left - height * sinTeta,
            width: height,
            height: height,
            angle: this.angle - 90
        })

        this.rightTriangle.set({
            top: this.top + width * sinTeta,
            left: this.left + width * cosTeta,
            width: height,
            height: height,
            angle: this.angle + 90
        })
    }

}
