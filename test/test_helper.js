//test helper was doing 4 main things for us
import ReactDOM from 'react-dom';
import React from 'react';
import chai, {expect} from 'chai';
import TestUtils from 'react-addons-test-utils';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../src/reducers';
//a browser-like environment
import jsdom from 'jsdom';

//cant use just '$' because it'll try to reach out to a real browser which doesnt exist
import jquery from 'jquery';
import chaiJquery from 'chai-jquery';

//1. Set up testing environment to run like a browser in the command line.
//equivalent to window.document in the browser.
//these two lines create the environment in the commandline
global.document = jsdom.jsdom('<!doctype html> <html> <body></body> </html>');
global.window = global.document.defaultView;
//this will return an instance of jquery, which will only get access to the
//fake/global.window instead of a real browser, which is the auto-behavior
const $ = jquery(global.window);

//2. build 'renderComponent' helper that should render a given react class

//component class is the re-usable class, the instance is an instance to test
function renderComponent (ComponentClass, props, state) {
  //how to create an instance, it requires a dom, we use the jsdom
  //we need to wrap this componentClass with a provider/redux store
  //it needs to be a child of the <Provider>, with a created store
  const componentInstance = TestUtils.renderIntoDocument(
    //when we create a redux store we need to pass in the reducers
    //initial state is the 2nd argument
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props}/>
    </Provider>
  );

  //renders, and we use ReactDOM to produce the HTML from the instance
  //and the $ is so we have access to the jQuery library
  return $(ReactDOM.findDOMNode(componentInstance));
}

//3. build helper for simulating events

//how to add a method to jQuery, in this case, being a simulate function
//now jQuery will have access to simulate
$.fn.simulate = function(eventName, value){
  //using 'this' to access to relevant 'div' that has been selected
  //React-test-utils has a simulate method to simulate different events
  //eventName to tell it what event it is, like key up/down, click, etc...
  //this [0] to return the first 'div' in the array

  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}

//4. set up chai-jquery

chaiJquery(chai, chai.util, $);

export {renderComponent, expect}
