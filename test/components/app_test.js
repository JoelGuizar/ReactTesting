//app_test corresponds to the app component
import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

//use 'describe' to group together similar tests
describe('App', () => {
  let component;

  beforeEach(()=> {
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    //find is a jQuery test method that accepts a CSS selector
    expect(component.find('.comment-box')).to.exist
  })
});
