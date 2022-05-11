import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReptileNew from './ReptileNew'
Enzyme.configure({adapter: new Adapter()})


describe('When ReptileNew renders', () => {
    it('displays a heading', () => {
      const reptileNew = shallow(<ReptileNew />)
      const reptilenew = reptileNew.find('h1').text()
      expect(reptilenew).toEqual('Create a New Reptile')
    })
    it('displays a form', () => {
        const reptileNew = shallow(<ReptileNew />)
        const formGroup = reptileNew.find("FormGroup")
        expect(formGroup.length).toEqual(4)
    })
    it('displays a form', () => {
        const reptileNew = shallow(<ReptileNew />)
        const formLabel = reptileNew.find("Input")
        expect(formLabel.length).toEqual(4)
    })
  })