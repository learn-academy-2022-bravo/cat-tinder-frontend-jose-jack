import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReptileEdit from './ReptileEdit'
Enzyme.configure({adapter: new Adapter()})


describe('When ReptileEdit renders', () => {
    it('displays a heading', () => {
      const reptileEdit = shallow(<ReptileEdit />)
      const reptileedit = reptileEdit.find('h1').text()
      expect(reptileedit).toEqual('Edit an Existing Reptile')
    })
    it('displays a form', () => {
        const reptileEdit = shallow(<ReptileEdit />)
        const formGroup = reptileEdit.find("FormGroup")
        expect(formGroup.length).toEqual(4)
    })
    it('displays a form', () => {
        const reptileEdit = shallow(<ReptileEdit />)
        const formLabel = reptileEdit.find("Input")
        expect(formLabel.length).toEqual(4)
    })
  })