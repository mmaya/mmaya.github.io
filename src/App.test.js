import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

window.scrollTo = jest.fn();

describe('When App renders without crashing', () => {
  const { getByTestId } = render(<App/>);
  it('render header and bottom nav bars', () => {
    const mobileNavBar = getByTestId("mobileNavBar");
    const webNavBar = getByTestId("webNavBar");
    expect(mobileNavBar).toBeInTheDocument();
    expect(webNavBar).toBeInTheDocument();
  })
});