import React from 'react';
import { renderWithRouter } from 'utils/renderWithRouter'
import AboutPage from 'views/AboutPage'

describe('when renders correctly ', () => {
  it('displays a description of myself', () => {
    const { getByText } = renderWithRouter(<AboutPage />);
    const title = getByText(/I’m a technology enthusiast with a solid work experience in design and building web applications. I have a serious passion for good coding and creating intuitive user experiences./i);
    expect(title).toBeInTheDocument();
  })
});
