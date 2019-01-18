import {fabric} from 'fabric'
import {assert} from 'chai'
import fs from 'fs'

import {Canvas, Arrowline} from '../src/index'
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
});

describe('Arrowline', () => {
    describe('constructor', () => {

            let arrowline, arrowlineObjects

        beforeEach(() => {
            arrowline = new Arrowline()
            arrowlineObjects = arrowline.getObjects()
        })

        it('Should create a body and 2 arrows in a group.', () => {
            // Arrange
            // Act
            // Assert
            assert.equal(arrowline.size(), 3)
            assert.equal(arrowlineObjects[0].type, 'rect')
            assert.equal(arrowlineObjects[1].type, 'triangle')
            assert.equal(arrowlineObjects[2].type, 'triangle')
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
    });
});
