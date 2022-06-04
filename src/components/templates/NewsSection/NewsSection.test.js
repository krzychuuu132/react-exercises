import React from 'react';
import { render, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import NewsSection from './NewsSection';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';

const mock = new MockAdapter(axios);

const query = `
{
  allArticles {
    title
    category
    description 
    image {
      url
    }
  }
}
`;

mock.onPost('/', { query }).reply(500);

describe('News Section', () => {
  it('Renders Articles', async () => {
    renderWithProviders(<NewsSection />);
  });
});
