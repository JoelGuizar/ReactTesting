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
      //simulating an event, here being the 'change' event
      component.find('textarea').simulate('change', 'new comment')
    });

    it('shows text in textarea', ()=>{
      //expect to have the value that we simulated
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when submitted, clears the input', ()=>{
      //don't have to find an element, because the whole component is the form
      component.simulate('submit', 'new comment')
      expect(component.find('textarea')).to.have.value('');
    });
  })
});
