import {fabric} from 'fabric'
import {Constants} from './constants'
import {Line} from './line'

export class Canvas extends fabric.Canvas {

    constructor(domElemendId) {
        super(domElemendId)
        this.domElemendId = domElemendId
        this.scale = {value: null, shape: null}
        this.backgroundImage = null
        // this._lockObjectsToBoundaries()
    }

    addImage(imageFile) {
        const reader = new FileReader()

        reader.onload = () => {
            const img = document.createElement('img')

            img.src = reader.result

            this.backgroundImage = new fabric.Image(img)
            this.backgroundImage.scale(this.height / this.backgroundImage.height)
            this.add(this.backgroundImage)
            this.renderAll()
        };

        reader.readAsDataURL(imageFile);
    }

    lockImage() {
        this.backgroundImage.sendToBack()
        this.backgroundImage.hasControls = false
        this.backgroundImage.selectable = false
        this.discardActiveObject();
        this.renderAll()
    }

    _lockObjectsToBoundaries() {
        this.on('object:moving', function (e) {
            var obj = e.target;

            // if object is too big ignore
            if (obj.currentHeight > this.height || obj.currentWidth > this.width) {
                return;
            }
            obj.setCoords();
            // top-left  corner
            if (obj.getBoundingRect().top < 0 || obj.getBoundingRect().left < 0) {
                obj.top = Math.max(obj.top, obj.top - obj.getBoundingRect().top);
                obj.left = Math.max(obj.left, obj.left - obj.getBoundingRect().left);
            }
            // bot-right corner
            if (obj.getBoundingRect().top + obj.getBoundingRect().height > this.height ||
                    obj.getBoundingRect().left + obj.getBoundingRect().width > this.width) {
                obj.top = Math.min(obj.top, this.height - obj.getBoundingRect().height +
                    obj.top - obj.getBoundingRect().top);
                obj.left = Math.min(obj.left, this.width - obj.getBoundingRect().width +
                    obj.left - obj.getBoundingRect().left);
            }
        });
    }

    setScale(scaleDefinition) {
        if (scaleDefinition.shape) {
            this.scale.shape = scaleDefinition.shape
        }
        if (scaleDefinition.value) {
            this.scale.value = scaleDefinition.value
        }
    }

    getScale() {
        return this.scale
    }

    lockScale() {
        this.scale.shape.hasControls = false
    }

    /*
     * @param choices: a list of (label, color)
     *  example: [
     *      {label: 'label1', color: 'blue'},
     *      {label: 'label2', color: 'rgba(255,0,0,0.5)'}
     *   ]
     * @return a DOM select object with corresponding options
     */
    listToSelectDOM(choices) {
        const canvasholder = document.getElementById(this.domElemendId)

        // Create and append select list
        const selectList = document.createElement('select')

        selectList.id = 'fabricashapeShapeChoices'
        canvasholder.parentElement.appendChild(selectList)

        // Create and append the options
        for (let i = 0; i < choices.length; i++) {
            const option = document.createElement('option')

            option.value = choices[i].label
            option.text = choices[i].label
            option.style.backgroundColor = choices[i].color
            selectList.appendChild(option)
        }
        return selectList
    }

    setShapeChoices(choices) {
        const selectObject = this.listToSelectDOM(choices)

        this.createReferenceLine(selectObject)
    }

    /**
     * Creates a line user can click on to duplicate it and use the duplicate into the scene.
     */
    createReferenceLine(selectObject) {
        const referenceLine = new fabric.Rect({
            top: 5, left: 5, width: 80, height: 17,
            fill: selectObject.options[selectObject.selectedIndex].style.backgroundColor
        })

        this.add(referenceLine)
        this.item(this.size() - 1).hasControls = false
        this.requestRenderAll()

        const fillReferenceLine = () => {
            this
                .item(this.size() - 1)
                .set('fill', selectObject.options[selectObject.selectedIndex].style.backgroundColor)
            this.renderAll()
        }

        const duplicateReferenceLine = () => {
            this.createReferenceLine(selectObject)
            referenceLine.hasControls = true
            Constants.RECT_DISABLED_CONTROLS.forEach((control) => {
                referenceLine.setControlVisible(control, false)
            })
        }

        referenceLine.on('mousedown', () => {
            duplicateReferenceLine()
            referenceLine.off('mousedown')
        })

        selectObject.removeEventListener('change', fillReferenceLine)
        selectObject.addEventListener('change', fillReferenceLine)
    }

    createScaledLine(options) {
        const scale = (this.scale.shape.width * this.scale.shape.scaleX) / this.scale.value

        options.top = options.top * scale
        options.left = options.left * scale
        options.width = options.width * scale
        options.height = options.stroke * scale

        return new Line(options)
    }

}
