// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Home from './Home'

import PropTypes from 'prop-types';

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
    it("displays a heading", () => {
    const home = shallow(<Home />)
    const homeH1 = home.find("h1").text()
    expect(homeH1).toEqual("Home")
    })
    it("displays an image", () => {
        const wrapper = shallow(<Home includedProp="Mittens"  />);
        expect(wrapper.props().includedProp).to.equal("Mittens" )
    })
});