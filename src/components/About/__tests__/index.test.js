import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

describe('About component', () => {
    // verify that the component is rendering
  it('renders', () => {
    render(<About />);
  });
  it('matches snapshot DOM node structure', () => {
      const { asFragment } = render(<About />);
      expect(asFragment()).toMatchSnapshot();
  })

  })