
let fabricashape = {}

fabricashape.Canvas = class Canvas extends fabric.Canvas {

    // this.mousePosition = {pointer: {x: 0, y: 0}, absolutePointer: {x: 0, y: 0}};

    constructor(domElemendId) {
        super(domElemendId)

        this.on('mouse:over', function(e) {
            if (e.target) {
                //e.target.set('fill', 'red')
            }
            this.renderAll()
        });

        this.on('mouse:out', function(e) {
            if (e.target) {
                //e.target.set('fill', 'rgba(255,0,0,0.5)')
            }
            this.renderAll()
        });

        this.on('mouse:move', function(e) {
            //mousePosition = {pointer: e.pointer, absolutePointer: e.absolutePointer};
            // console.log(JSON.stringify(e))
        });

        this.setShapeChoices(domElemendId, [{label: 'toto in da place when you look at the sky and you think about the other people in the world', color: 'red'},{label: 'tata', color: 'rgba(255,0,0,0.5)'}])
    }

    /* 
     * @param choices: a list of (label, color)
     *  example: [
     *      {label: 'label1', color: 'blue'},
     *      {label: 'label2', color: 'rgba(255,0,0,0.5)'}
     *   ]
     */
    setShapeChoices(domElemendId, choices) {
        var canvasholder = document.getElementById(domElemendId)

        //Create and append select list
        var selectList = document.createElement("select")
        selectList.id = "fabricashapeShapeChoices"
        canvasholder.parentElement.appendChild(selectList)

        //Create and append the options
        for (var i = 0; i < choices.length; i++) {
            var option = document.createElement("option")
            option.value = choices[i].label
            option.text = choices[i].label
            option.style.backgroundColor = choices[i].color
            selectList.appendChild(option)
        }
        for (var key in CONSTANTS.SELECT_LIST_STYLE) {
            selectList.style[key] = CONSTANTS.SELECT_LIST_STYLE[key]
        }

        this.createReferenceRect(selectList)

    }

    createReferenceRect(selectList) {
        let red = new fabric['Rect']({ top: 0, left: 205, width: 80, height: 17, fill: selectList.options[0].style.backgroundColor})
        this.add(red)
        this.item(this.size() - 1).hasControls = false
        this.requestRenderAll()

        let fillReferenceRect = () => {
            this.item(this.size() - 1).set('fill', selectList.options[selectList.selectedIndex].style.backgroundColor)
        }

        red.on('mousedown', (e) => {
            this.createReferenceRect(selectList)
            red.hasControls = true
            CONSTANTS.RECT_DISABLED_CONTROLS.forEach((control) => {
                red.setControlVisible(control, false)
            })
        })

        selectList.removeEventListener('change', fillReferenceRect)
        selectList.addEventListener('change', fillReferenceRect)

    }
}
