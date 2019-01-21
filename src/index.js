import {fabric} from 'fabric'
import {SELECT_LIST_STYLE, RECT_DISABLED_CONTROLS} from './constants'

export class Canvas extends fabric.Canvas {

    constructor(domElemendId) {
        super(domElemendId)
        this.domElemendId = domElemendId
        this.scale = {value: null, shape: null}
        this._lockObjectsToBoundaries()
    }

    _lockObjectsToBoundaries() {
        this.on('object:moving', function (e) {
            var obj = e.target;
            // if object is too big ignore
            if(obj.currentHeight > this.height || obj.currentWidth > this.width){
                return;
            }        
            obj.setCoords();        
            // top-left  corner
            if(obj.getBoundingRect().top < 0 || obj.getBoundingRect().left < 0){
                obj.top = Math.max(obj.top, obj.top-obj.getBoundingRect().top);
                obj.left = Math.max(obj.left, obj.left-obj.getBoundingRect().left);
            }
            // bot-right corner
            if(obj.getBoundingRect().top+obj.getBoundingRect().height  > this.height || obj.getBoundingRect().left+obj.getBoundingRect().width  > this.width){
                obj.top = Math.min(obj.top, this.height-obj.getBoundingRect().height+obj.top-obj.getBoundingRect().top);
                obj.left = Math.min(obj.left, this.width-obj.getBoundingRect().width+obj.left-obj.getBoundingRect().left);
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

        //Create and append select list
        const selectList = document.createElement("select")
        selectList.id = "fabricashapeShapeChoices"
        canvasholder.parentElement.appendChild(selectList)

        //Create and append the options
        for (let i = 0; i < choices.length; i++) {
            const option = document.createElement("option")
            option.value = choices[i].label
            option.text = choices[i].label
            option.style.backgroundColor = choices[i].color
            selectList.appendChild(option)
        }
        for (let key in SELECT_LIST_STYLE) {
            selectList.style[key] = SELECT_LIST_STYLE[key]
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
        const referenceLine = new fabric.Rect({ top: 5, left: 5, width: 80, height: 17, fill: selectObject.options[selectObject.selectedIndex].style.backgroundColor})
        this.add(referenceLine)
        this.item(this.size() - 1).hasControls = false
        this.requestRenderAll()

        const fillReferenceLine = () => {
            this.item(this.size() - 1).set('fill', selectObject.options[selectObject.selectedIndex].style.backgroundColor)
            this.renderAll()
        }

        const duplicateReferenceLine = () => {
            this.createReferenceLine(selectObject)
            referenceLine.hasControls = true
            RECT_DISABLED_CONTROLS.forEach((control) => {
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
}

/**
 * An Arrowline is a group that looks like a double arrowed line:
 *       <------->
 */
export class Arrowline extends fabric.Rect {

    constructor(options) {
        super(options)
        this.type = "arrowline"

        this.hasControls = true
        RECT_DISABLED_CONTROLS.forEach((control) => {
            this.setControlVisible(control, false)
        })
        this.set('fill', 'transparent')

        this.on(
            {
                'added': () => {
                    this.body = new fabric.Rect()
                    this.leftTriangle = new fabric.Triangle()
                    this.rightTriangle = new fabric.Triangle()

                    this._setComponentsPosition()

                    const components = [this.body, this.leftTriangle, this.rightTriangle]

                    components.forEach((component) => {
                        component.hasControls = false
                        component.selectable = false
                        this.canvas.add(component)
                        component.sendToBack()
                    })
                },
                'modified': this._setComponentsPosition,
                'scaling': this._setComponentsPosition,
                'moving': this._setComponentsPosition,
                'rotating': this._setComponentsPosition,
            }
        )
    }

    setText(text) {
        this.text = text
    }

    _setComponentsPosition() {
        const degreesToRadiansRatio = Math.PI / 180,
            height = this.height * this.scaleY,
            width = this.width * this.scaleX,
            cosTeta = Math.cos(this.angle * degreesToRadiansRatio),
            sinTeta = Math.sin(this.angle * degreesToRadiansRatio),
            boundingRect = this.getBoundingRect()


        if (this.text) {
            this.text.set({
                top: boundingRect.top + 0.5 * (boundingRect.height - this.text.height),
                left: boundingRect.left + 0.5 * (boundingRect.width - this.text.width),
            })
        }

        this.body.set({
            top: this.top + height  * sinTeta + (height / 4) * cosTeta,
            left: this.left + height * cosTeta - (height / 4) * sinTeta,
            width: width - 2 * height,
            height: height / 2,
            angle: this.angle,
            fill: 'blue',
        })

        this.leftTriangle.set({
            top: this.top + height * cosTeta,
            left: this.left - height * sinTeta,
            width: height,
            height: height,
            angle: this.angle - 90,
            fill: 'blue',
        })

        this.rightTriangle.set({
            top: this.top + width * sinTeta,
            left: this.left + width * cosTeta,
            width: height,
            height: height,
            angle: this.angle + 90,
            fill: 'blue',
        })
    }

}

