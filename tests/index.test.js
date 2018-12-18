import {Canvas} from '../src/index'
import {assert} from 'chai';


describe('constructor', function() {
  it('Should save the given domElemendId.', function() {
      const c = new Canvas('myId')

      assert.equal(c.domElemendId, 'myId')
  });
});
