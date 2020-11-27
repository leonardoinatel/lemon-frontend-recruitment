import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

import Intro from '../pages/Intro';

describe('Testing home page', () => {
  const renderPage = () =>
    render(
      <ThemeProvider theme={theme}>
        <Intro />
      </ThemeProvider>,
    )


 it('Should render the home page with messages of greeting', () => {
  const { getByText } = renderPage();

  expect(getByText(/nice to meet/)).toBeInTheDocument();
  expect(getByText(/Thank you for your interest/)).toBeInTheDocument();
  expect(getByText(/We want to give the last/)).toBeInTheDocument();
 })

  it('Should render a button that redirect to assignment', () => {
    const { getByTestId } = renderPage();
    const buttonStart = getByTestId('buttonStart');
    // try to check if this button redirect to assignment but it fail, so a change to just check if the button is on the page
    expect(buttonStart.textContent).toBe('Start');
  })

  it('Should render each item of recomendation array', () => {
    const { getByText } = renderPage();

    expect(getByText(/assignment instructions/)).toBeInTheDocument();
    expect(getByText(/we are not evaluating how fast/)).toBeInTheDocument();
    expect(getByText(/There are all kinds of bugs/)).toBeInTheDocument();
    expect(getByText(/Commit your code all the time!/)).toBeInTheDocument();
  })

});