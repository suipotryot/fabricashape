import {fabric} from 'fabric'
import {Constants} from './constants'

export class Line extends fabric.Rect {

    constructor(options) {
        super(options)
        this.bodyFill = options.fill
        this.bodyText = options.text || ''
        this.components = []
        this.type = 'line'
        this.hasControls = true
        Constants.RECT_DISABLED_CONTROLS.forEach((control) => {
            this.setControlVisible(control, false)
        })
        this.set('fill', 'transparent')

        this.on(
            {
                'added': this._initComponents,
                'modified': this._setComponentsPosition,
                'scaling': this._setComponentsPosition,
                'moving': this._setComponentsPosition,
                'rotating': this._setComponentsPosition
            }
        )
    }

    _initComponents() {
        this.text = new fabric.Text('', {visible: false})
        this.body = new fabric.Rect({
            width: this.width,
            height: this.height,
            top: this.top,
            left: this.left,
            fill: this.bodyFill
        })
        this.components = [this.text, this.body]

        this.components.forEach((component) => {
            component.hasControls = false
            component.selectable = false
            this.canvas.add(component)
            component.sendBackwards()
        })
        this.setText(this.bodyText)
    }

    _setComponentsPosition() {
        const height = this.height * this.scaleY,
            width = this.width * this.scaleX,
            boundingRect = this.getBoundingRect()

        if (this.text) {
            this.text.set({
                top: boundingRect.top + 0.5 * (boundingRect.height - this.text.height),
                left: boundingRect.left + 0.5 * (boundingRect.width - this.text.width)
            })
        }

        this.body.set({
            top: this.top,
            left: this.left,
            width: width,
            height: height,
            angle: this.angle
        })

    }

    getComponents() {
        return this.components
    }

    setText(text) {
        if (text.slice(-1) !== 'm') {
            text += 'm'
        }
        this.text.set({
            text: text
        })
        this._setComponentsPosition()
    }

}

