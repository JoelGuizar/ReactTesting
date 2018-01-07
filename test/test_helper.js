//test helper was doing 4 main things for us
import ReactDOM from 'react-dom';
import React from 'react';
import {expect} from 'chai';
import TestUtils from 'react-addons-test-utils';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../src/reducers';
//a browser-like environment
import jsdom from 'jsdom';

//cant use just '$' because it'll try to reach out to a real browser which doesnt exist
import jquery from 'jquery';

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
function renderComponent (ComponentClass) {
  //how to create an instance, it requires a dom, we use the jsdom
  //we need to wrap this componentClass with a provider/redux store
  //it needs to be a child of the <Provider>, with a created store
  const componentInstance = TestUtils.renderIntoDocument(
    //when we create a redux store we need to pass in the reducers
    <Provider store={createStore(reducers)}>
      <ComponentClass />
    </Provider>
  );

  //renders, and we use ReactDOM to produce the HTML from the instance
  //and the $ is so we have access to the jQuery library
  return $(ReactDOM.findDOMNode(componentInstance));
}

//3. build helper for simulating event

//4. set up chai-jquery

export {renderComponent, expect}
