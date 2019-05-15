import {assert} from 'chai'

import {Arrowline, Canvas, Constants} from '../lib/fabricashape.js'

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

        it('Should disable any control in Constants.RECT_DISABLED_CONTROLS.', () => {
            // Arrange
            // Act
            // Assert
            Constants.RECT_DISABLED_CONTROLS.forEach((control) => {
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

    describe('serialize/deserialize', () => {

        let canvas, arrowline

        beforeEach(() => {
            canvas = new Canvas('myId')
            arrowline = new Arrowline({top: 1, left: 2, width: 3, height: 4, angle: 5})
        })

        it('Should be working with basics.', () => {
            // Arrange
            arrowline = new Arrowline({})
            canvas.add(arrowline)
            const expectedJSON = canvas.toJSON()
        
            // Act
            canvas = new Canvas('myId')
            canvas.loadFromJSON(expectedJSON)
            const result = canvas.toJSON()
        
            // Assert
            assert.deepEqual(result, expectedJSON)
        });

        it('Should take bodyText & bodyFill in account.', () => {
            // Arrange
            arrowline = new Arrowline({bodyText: 'toast', bodyFill: 'blue'})
            canvas.add(arrowline)
            const expectedJSON = canvas.toJSON()
        
            // Act
            canvas = new Canvas('myId')
            canvas.loadFromJSON(expectedJSON)
            const result = canvas.toJSON()
        
            // Assert
            assert.deepEqual(result, expectedJSON)
        });
    });

});
