import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../App';
import VisiblePersonInfo from '../containers/VisiblePersonInfo';


describe("App test", function() {
  console.log('App test launched');

  it("VisiblePersonInfo has a header", function() {
    expect(shallow(<App />).contains(<VisiblePersonInfo />)).to.equal(true);
  });

  it("there is an app class in the div", function() {
    expect(shallow(<App />).is('.app')).to.equal(true);
  });

  it("currently length is 1", function() {
    expect(shallow(<App />).find('.app').length).to.equal(1);
  });

});
