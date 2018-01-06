// things to test
// make sure the intial state, the array in the argument, never gets changed
import {expect} from '../test_helper';
import commentReducer from '../../src/reducers';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('CommentsReducer', () => {
  it('handles action with unknown type', ()=>{
    //so reducer's action won't comeo out undefined
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type SAVE_COMMENT', ()=>{
    const action = {type: SAVE_COMMENT, payload: 'new comment'}
    expect(commentReducer([], action)).to.eql(['new comment'])
  });
});
