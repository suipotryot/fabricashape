import {Arrowline} from '../src/arrowline'
import {assert} from 'chai'


describe('Arrowline', () => {
    describe('constructor', () => {
        it('Should create a body and 2 arrows in a group.', () => {
            // Arrange
            // Act
            const arrowline = new Arrowline()
            const arrowlineObjects = arrowline.getObjects()
        
            // Assert
            assert.equal(arrowline.size(), 3)
            assert.equal(arrowlineObjects[0].type, 'rect')
            assert.equal(arrowlineObjects[1].type, 'triangle')
            assert.equal(arrowlineObjects[2].type, 'triangle')
        });
    });
});
