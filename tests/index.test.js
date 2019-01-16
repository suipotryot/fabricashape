import {Canvas} from '../src/index'
import {assert} from 'chai'
import fs from 'fs'

// Init fake 'document' to simulate DOM for tests
fs.readFile('./tests/example2D.html', 'utf8', (err,data) => {
    if (err) {
        console.error(err)
        process.exit()
    }
    require('jsdom-global')(data)
});


describe('constructor', () => {
    it('Should save the given domElemendId.', () => {
        const c = new Canvas('myId')

        assert.equal(c.domElemendId, 'myId')
    });



    it('Should create a scale double arrowed shape.', () => {

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
