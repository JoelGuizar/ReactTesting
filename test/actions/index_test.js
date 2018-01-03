import {expect} from '..test_helper';
import SAVE_COMMENT from '../../src/actions/types';
import { saveComment } from '../../src/actions';
//dont need rendercomponent helper since we are test only action creator
//when we test action creators, we are a little more low level/specific
describe('actions', ()=>{
  describe('saveComment', ()=>{
    it('has the correct type', ()=>{
      const action = saveComment();
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('has the correct payload', ()=>{
      const action = saveComment('new comment');
      expect(action.payload).to.equal('new comment');
    });
  });
});
