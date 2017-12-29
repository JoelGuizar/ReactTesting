//import helper functions
//import component we are testing

import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  //function that is run before any it statement
  let component;

  beforeEach(()=>{
    component = renderComponent(CommentBox);
  });

  it('has the correct class', ()=>{
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', ()=>{
    //renderComponent is returning jquery object wrapping the commentbox
    //so we can use jquery test helpers with this now.
    expect(component.find('textarea')).to.exist;
  });

  it('it has a button', ()=> {
    expect(component.find('button')).to.exist;
  });

  describe('Entering Some Text', ()=>{
    //this beforeEach will only be run before
    //these tests beneatch this describe block
    beforeEach(()=>{
      //helper
      component.find('textarea').simulate('change', 'new comment')
    });

    it('shows text in textarea', ()=>{

    });

    it('when submitted, clears the input', ()=>{

    });
  })
});
