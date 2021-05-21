import React from 'react';
import { render, screen } from '@testing-library/react';
import CoverImage from './CoverImage';
import image from 'views/images/portfolio-project.png'

describe('when the CoverImage receives all the attributes', () => {
  const {getByTestId, getByText} = render(<CoverImage image={image}><p>I'm a children</p></CoverImage>)
  it('displays a image and a childres', () => {
    const coverImage = getByTestId("image");
    expect(coverImage).toHaveStyle(`backgroundImage: ${image.imageSrc}`);
    const title = getByText(/I'm a children/i);
    expect(title).toBeInTheDocument();
  })
});

describe("when the don't receive a image", () => {
  it('renders without crashing', () => {
    render(<CoverImage />)
  })
});