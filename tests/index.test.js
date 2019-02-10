import {fabric} from 'fabric'
import {assert} from 'chai'
import fs from 'fs'
import * as events from 'events'

import {Canvas, Arrowline, Line} from '../src/index'
import {RECT_DISABLED_CONTROLS} from '../src/constants'

// Init fake 'document' to simulate DOM for tests
fs.readFile('./tests/example2D.html', 'utf8', (err,data) => {
    if (err) {
        console.error(err)
        process.exit()
    }
    require('jsdom-global')(data)
});

describe('Canvas', () => {

    describe('constructor', () => {
        it('Should save the given domElemendId.', () => {
            const c = new Canvas('myId')

            assert.equal(c.domElemendId, 'myId')
        });
    });

    describe('listToSelectDOM', () => {

        const tests = [
            {
                description: 'Should return a select object with as much choices',
                list: [
                    {label: 'label1', color: 'color1'},
                    {label: 'label2', color: 'color2'}
                ],
                expectedLength: 2,
                expectedContent: [
                    { value: 'label1', text: 'label1' },
                    { value: 'label2', text: 'label2' }

                ]
            },
            {
                description: 'Should return empty select object for empty choices',
                list: [ ],
                expectedLength: 0
            }
        ]

        tests.forEach((test) => {
            it(test.description, () => {
                // Arrange
                const c = new Canvas('example2D')
                // Act
                const resultSelectDOM = c.listToSelectDOM(test.list)

                // Assert
                assert.equal(resultSelectDOM.children.length, test.expectedLength)

                if (test.expectedContent) {
                    for (var i = 0, len = test.expectedContent.len; i < len; i++) {
                        assert.equal(resultSelectDOM.children[i].value, test.expectedContent[i].value)
                        assert.equal(resultSelectDOM.children[i].text, test.expectedContent[i].text)
                    }
                }
            });
        })
    });

    describe('setScale', () => {
        it('Should save given shape and given scale value.', () => {
            // Arrange
            const canvas = new Canvas('example2D')
            const shape = new fabric.Rect({width: 10, height: 10})
            const value = 13.89
        
            // Act
            const result = canvas.setScale({shape, value})
        
            // Assert
            assert.equal(canvas.scale.shape, shape)
            assert.equal(canvas.scale.value, value)
        });

        it('Should save only shape if no value is given.', () => {
            // Arrange
            const canvas = new Canvas('example2D')
            const shape = new fabric.Rect({width: 10, height: 10})
            const value = 13.89
        
            // Act
            canvas.setScale({shape, value})
            const result = canvas.setScale({shape})
        
            // Assert
            assert.equal(canvas.scale.shape, shape)
            assert.equal(canvas.scale.value, value)
        });

        it('Should save only value if no shape is given.', () => {
            // Arrange
            const canvas = new Canvas('example2D')
            const shape = new fabric.Rect({width: 10, height: 10})
            const value = 13.89
        
            // Act
            canvas.setScale({shape, value})
            const result = canvas.setScale({value})
        
            // Assert
            assert.equal(canvas.scale.shape, shape)
            assert.equal(canvas.scale.value, value)
        });
    });

    describe('lockScale', () => {
        it('Should set scale shape hasControls attribute to false.', () => {
            // Arrange
            const canvas = new Canvas('example2D')
        
            // Act
            const shape = new fabric.Rect({width: 10, height: 10})
            const value = 13.89
            canvas.setScale({shape, value})
            canvas.lockScale()
        
            // Assert
            assert.isFalse(canvas.scale.shape.hasControls)
        });
    });

    describe('createScaledLine', () => {
        it('Should create a line with dimensions calculated from scale.', () => {
            // Arrange
            const canvas = new Canvas('example2D')
        
            // Act
            const shape = new fabric.Rect({width: 10, height: 10})
            const value = 12.5
            canvas.setScale({shape, value})
            const createdLine = canvas.createScaledLine({top: 1, left: 2, width: 3, stroke: 0.4})
        
            // Assert
            const scale = 10 / 12.5 // shape.width / scale value
            assert.equal(createdLine.top, 1 * scale, "top is not ok")
            assert.equal(createdLine.left, 2 * scale, "left is not ok")
            assert.equal(createdLine.width, 3 * scale, "width is not ok")
            assert.equal(createdLine.height, 0.4 * scale, "height is not ok")
        });
    });

});

describe('Line', () => {

    let canvas, line, lineComponents

    beforeEach(() => {
        canvas = new Canvas('myId')
        line = new Line({top: 1, left: 2, width: 3, height: 4, angle: 5})
    })

    describe('constructor', () => {
        it('Should set type to "line".', () => {
            // Arrange
            // Act
            // Assert
            assert.equal(line.type, 'line')
        });

        it('Should set fill of main line to transparent.', () => {
            // Arrange
            // Act
            // Assert
            assert.equal(line.fill, 'transparent')
        });

        it('Should set hasControls to true.', () => {
            // Arrange
            // Act
            // Assert
            assert.isTrue(line.hasControls)
        });

        it('Should disable any control in RECT_DISABLED_CONTROLS.', () => {
            // Arrange
            // Act
            // Assert
            RECT_DISABLED_CONTROLS.forEach((control) => {
                assert.isFalse(line.isControlVisible(control), `Control ${control} is visible while it shouldn't.`)
            })
        });

        it('Should rescale body to equal main line.', () => {
            // Arrange

            // Act
            canvas.add(line)
            line.scale(12)
            line.fire('scaling')

            // Assert
            assert.equal(line.body.scaleX, 1)
            assert.equal(line.body.scaleY, 1)
            assert.equal(line.scaleY, 12)
            assert.equal(line.body.top, line.top)
            assert.equal(line.body.left, line.left)
            assert.equal(line.body.height, line.height * line.scaleY)
            assert.equal(line.body.width, line.width * line.scaleX)
            assert.equal(line.body.angle, line.angle)
        });

        it('Should set body fill to given fill.', () => {
            // Arrange
            const expectedFill = "blue"
        
            // Act
            line = new Line({fill: expectedFill})
            canvas.add(line)
        
            // Assert
            assert.equal(line.body.fill, expectedFill)
        });

        it('Should set text to given text.', () => {
            // Arrange
            const expectedText = "12m"
        
            // Act
            line = new Line({text: expectedText})
            canvas.add(line)
        
            // Assert
            assert.equal(line.text.text, expectedText)
        });
    });

    describe('getComponents', () => {
        it('Should return components of the line.', () => {
            // Arrange
            // Act
            canvas.add(line)
            lineComponents = line.getComponents()

            // Assert
            assert.equal(lineComponents.length, 2)
            assert.equal(lineComponents[0].type, 'text')
            assert.equal(lineComponents[1].type, 'rect')
        });
    });

    describe('setText', () => {
        it('Should change component text.', () => {
            // Arrange
            const expectedText = "12.4m"
        
            // Act
            canvas.add(line)
            line.setText(expectedText)
        
            // Assert
            assert.equal(line.getComponents()[0].text, expectedText)
        });

        it('Should add "m" at the end if not already set.', () => {
            // Arrange
            const expectedText = "12.4m"
        
            // Act
            canvas.add(line)
            line.setText("12.4")
        
            // Assert
            assert.equal(line.getComponents()[0].text, expectedText)
        });
    });

});

describe('Arrowline', () => {

    describe('constructor', () => {

        let canvas, arrowline, arrowlineComponents

        beforeEach(() => {
            canvas = new Canvas('myId')
            arrowline = new Arrowline({top: 1, left: 2, width: 3, height: 4, angle: 5})
        })

        it('Should set type to "arrowline".', () => {
            // Arrange
            // Act
            // Assert
            assert.equal(arrowline.type, 'arrowline')
        });

        it('Should create a text, a body and 2 arrows in a group.', () => {
            // Arrange
            // Act
            canvas.add(arrowline)
            arrowlineComponents = arrowline.getComponents()

            // Assert
            assert.equal(arrowlineComponents.length, 4)
            assert.equal(arrowlineComponents[0].type, 'rect')
            assert.equal(arrowlineComponents[1].type, 'triangle')
            assert.equal(arrowlineComponents[2].type, 'triangle')
            assert.equal(arrowlineComponents[3].type, 'text')
        });

        it('Should set hasControls to true.', () => {
            // Arrange
            // Act
            // Assert
            assert.isTrue(arrowline.hasControls)
        });

        it('Should disable any control in RECT_DISABLED_CONTROLS.', () => {
            // Arrange
            // Act
            // Assert
            RECT_DISABLED_CONTROLS.forEach((control) => {
                assert.isFalse(arrowline.isControlVisible(control), `Control ${control} is visible while it shouldn't.`)
            })
        });

        it('Should not resize triangles on group resize.', () => {
            // Arrange
            arrowline.scale(12)

            // Act
            canvas.add(arrowline)
            arrowline.fire('scaling')

            // Assert
            assert.equal(arrowline.leftTriangle.scaleY, 1)
            assert.equal(arrowline.rightTriangle.scaleY, 1)
        });

        it('Should rescale body to touch both arrows.', () => {
            // Arrange
            arrowline.scale(12)
            const degreesToRadiansRatio = Math.PI / 180,
                height = arrowline.height * arrowline.scaleY,
                width = arrowline.width * arrowline.scaleX,
                cosTeta = Math.cos(arrowline.angle * degreesToRadiansRatio),
                sinTeta = Math.sin(arrowline.angle * degreesToRadiansRatio),
                boundingRect = arrowline.getBoundingRect(),
                expectedTop = arrowline.top + height  * sinTeta + (height / 4) * cosTeta,
                expectedLeft = arrowline.left + height * cosTeta - (height / 4) * sinTeta,
                expectedWidth = width - 2 * height,
                expectedHeight = height / 2,
                expectedAngle = arrowline.angle

            // Act
            canvas.add(arrowline)
            arrowline.fire('scaling')

            // Assert
            assert.equal(arrowline.body.scaleX, 1)
            assert.equal(arrowline.body.top, expectedTop)
            assert.equal(arrowline.body.left, expectedLeft)
            assert.equal(arrowline.body.height, expectedHeight)
            assert.equal(arrowline.body.width, expectedWidth)
            assert.equal(arrowline.body.angle, expectedAngle)
        });

        it('Should set body fill to given fill.', () => {
            // Arrange
            const expectedFill = "green"
        
            // Act
            arrowline = new Arrowline({fill: expectedFill})
            canvas.add(arrowline)
        
            // Assert
            assert.equal(arrowline.body.fill, expectedFill)
            assert.equal(arrowline.leftTriangle.fill, expectedFill)
            assert.equal(arrowline.rightTriangle.fill, expectedFill)
        });
    });

});
