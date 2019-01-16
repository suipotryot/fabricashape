import {fabric} from 'fabric'
import {SELECT_LIST_STYLE, RECT_DISABLED_CONTROLS} from './constants'

export class Canvas extends fabric.Canvas {

    constructor(domElemendId) {
        super(domElemendId)
        this.domElemendId = domElemendId
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
        const selectList = this.listToSelectDOM(choices)
        this.createReferenceLine(selectList)
    }

    createReferenceLine(selectList) {
        const referenceLine = new fabric['Rect']({ top: 0, left: 205, width: 80, height: 17, fill: selectList.options[selectList.selectedIndex].style.backgroundColor})
        this.add(referenceLine)
        this.item(this.size() - 1).hasControls = false
        this.requestRenderAll()

        const fillReferenceLine = () => {
            this.item(this.size() - 1).set('fill', selectList.options[selectList.selectedIndex].style.backgroundColor)
            this.renderAll()
        }

        const duplicateReferenceLine = () => {
            this.createReferenceLine(selectList)
            referenceLine.hasControls = true
            RECT_DISABLED_CONTROLS.forEach((control) => {
                referenceLine.setControlVisible(control, false)
            })
        }

        referenceLine.on('mousedown', () => {
            duplicateReferenceLine()
            referenceLine.off('mousedown')
        })

        selectList.removeEventListener('change', fillReferenceLine)
        selectList.addEventListener('change', fillReferenceLine)
    }
}
