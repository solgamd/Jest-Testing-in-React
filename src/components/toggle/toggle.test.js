import React from 'react';
import Enzyme, { shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Toggle from './Toggle';

Enzyme.configure({adapter: new Adapter()});


describe('Toggle', () => {
    it('should show text', () => {
        const wrapper = shallow(<Toggle />);
        const text = wrapper.find('div p');
        expect(text.text()).toBe('Text Here');
    });
    it('should hide text when button clicked', () => {
        const wrapper = shallow(<Toggle />);
        const button = wrapper.find('button');
        button.simulate('click');
        const text = wrapper.find('div p');
        expect(text.length).toBe(0);
    })
})
