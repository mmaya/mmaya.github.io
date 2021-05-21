import React from 'react';
import HomePage from './HomePage';
import { renderWithRouter } from 'utils/renderWithRouter'

window.scrollTo = jest.fn();

describe('when renders correctly ', () => {
  const { getByText } = renderWithRouter(<HomePage />);
  it('displays my name as a title', () => {
    const title = getByText(/Milleni Maya/i);
    expect(title).toBeInTheDocument();
  })
});