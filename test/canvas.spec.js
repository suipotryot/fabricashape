import {fabric} from 'fabric'
import {assert} from 'chai'

import {Canvas} from '../lib/fabricashape.js'

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

        it('Should take scale shape transformations in account.', () => {
            // Arrange
            const canvas = new Canvas('example2D')
        
            // Act
            const shape = new fabric.Rect({width: 10, height: 10})
            shape.scaleX = 3
            const value = 12.5
            canvas.setScale({shape, value})
            const createdLine = canvas.createScaledLine({top: 1, left: 2, width: 3, stroke: 0.4})
        
            // Assert
            const scale = (3 * 10) / 12.5 // shape.width / scale value
            assert.equal(createdLine.top, 1 * scale, "top is not ok")
            assert.equal(createdLine.left, 2 * scale, "left is not ok")
            assert.equal(createdLine.width, 3 * scale, "width is not ok")
            assert.equal(createdLine.height, 0.4 * scale, "height is not ok")

        });
    });

    describe

});
