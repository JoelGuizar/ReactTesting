//import helper functions
//import component we are testing

import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  it('has a text area', ()=>{
    //renderComponent is returning jquery object wrapping the commentbox
    //so we can use jquery test helpers with this now.
    const component = renderComponent(CommentBox);
    expect(component.find('textarea')).to.exist;
  });

  it('it has a button', ()=> {
    const component = renderComponent(CommentBox);
    expect(component.find('button')).to.exist;
  });
});
