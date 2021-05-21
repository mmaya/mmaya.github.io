import React from 'react';
import { render } from '@testing-library/react';
import ImageCard from './ImageCard';
import image from 'views/images/portfolio-project.png'
import Button from '@material-ui/core/Button';

describe('when the card receives all the attributes', () => {
  const {getByLabelText, getByText} = render(<ImageCard 
                  title="This portfolio"
                  subtitle="Whatever"
                  image={image}
                  content="Well-organized single page project, developed with React Hooks, hosted on GitHub Pages."
                  buttons={
                    [<Button
                      variant="contained"
                      color="secondary"
                      key="source-button-2"
                      onClick={() => window.open("https://github.com/mmaya/my-portfolio", "_blank")}
                    >Source code</Button>]
                  }/>)
  it('displays all atributtes', () => {
    const cardMedia = getByLabelText("card-media");
    expect(cardMedia).toHaveStyle(`backgroundImage: ${image.imageSrc}`);
    const title = getByText(/This portfolio/i);
    expect(title).toBeInTheDocument();
    const content = getByText(/Well-organized single page project, developed with React Hooks, hosted on GitHub Pages./i);
    expect(content).toBeInTheDocument();
    const subtitle = getByText(/Whatever/i);
    expect(subtitle).toBeInTheDocument();
  })

});

describe("when the card don't receive any of the attributes", () => {
  it('renders without crashing', () => {
    render(<ImageCard />)
  })
});