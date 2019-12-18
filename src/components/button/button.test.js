import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button/button';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button></Button>, div);
});

it('renders button correctly', () => {
    const { getByTestId } = render(<Button label="Click me"></Button>);
    expect(getByTestId('button')).toHaveTextContent('Click me');
});

it('renders button correctly', () => {
    const { getByTestId } = render(<Button label="Save"></Button>);
    expect(getByTestId('button')).toHaveTextContent('Save');
});

it('matches snapshot 1', () => {
    const tree = renderer.create(<Button label="Save"></Button>).toJSON();
    expect(tree).toMatchSnapshot(); //looks at file tree for 'button.snapshot" (or creates it) and dumps entire JSON into it
});

it('matches snapshot 2', () => {
    const tree = renderer.create(<Button label="Click me"></Button>).toJSON();
    expect(tree).toMatchSnapshot(); //looks at file tree for 'button.snapshot" (or creates it) and dumps entire JSON into it
});