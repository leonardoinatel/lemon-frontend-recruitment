import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

import Intro from '../pages/Intro';

const renderPage = () =>
    render(
      <ThemeProvider theme={theme}>
        <Intro />
      </ThemeProvider>,
    )

describe('Testando home page', () => {
 it('Should render the home page with messages of greeting', () => {
  const { getByText } = renderPage();

  expect(getByText(/nice to meet/)).toBeInTheDocument();
  expect(getByText(/Thank you for your interest/)).toBeInTheDocument();
  expect(getByText(/We want to give the last/)).toBeInTheDocument();
 })

});