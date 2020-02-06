import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('Question component', () => {
    it('should display text input to fill question', () => {
        const wrapper = shallow(<App />);
        // expect(wrapper.find('input[type="text"]').length).toBe(1);
        expect(wrapper.get('input')); //better option than line 15
    });

    it('should display a submit button to send question', () => {
        const wrapper = shallow(<App />);
        // expect(wrapper.find('button[type="submit"]').length).toBe(1);
        expect(wrapper.get('button'));  //better option than line 21
    });

    it('should display answer in both text and images format', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({
            answer: {
                answer: 'no',
                forced: false,
                image: 'https://yesno.wtf/assets/no/0-b6d3e555af2c09094def76cf2fbddf46.gif'
            },
        });

        const answer = wrapper.find('.answer');
        expect(answer.find('h2').text()).toBe('no');
        expect(answer.find('img').prop('src')).toBe('https://yesno.wtf/assets/no/0-b6d3e555af2c09094def76cf2fbddf46.gif')
    });

    it('should not display any answer by default', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.answer').length).toBe(0);
    })
})