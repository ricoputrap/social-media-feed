import React from 'react'
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from '.';

afterEach(() => {
  cleanup()
});

describe("<Header />", () => {
  test("Header component renders the correct app name", () => {
    const { getByTestId } = render(<Header />);
    const header = screen.getByTestId("header");

    // Check if the header element is in the document
    expect(header).toBeInTheDocument();

    // Check if the header has the correct class name
    expect(header).toHaveClass('h-14', 'flex', 'items-center', 'pl-4');

    // Check if the header contains the correct text
    const headingElement = getByTestId('header').querySelector('h1');
    expect(headingElement).toHaveTextContent('ShareFree');
  })
})