import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './Utils/renderWithRouter';
import App from '../App';

describe('Testa o componente <App.js />', () => {
  it('O botão home é exibido na tela', () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: /home/i });
    expect(home).toBeInTheDocument();
  });

  it('O botão about é exibido na tela', () => {
    renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: /about/i });
    expect(about).toBeInTheDocument();
  });

  it('O botão favorite pokémon é exibido na tela', () => {
    renderWithRouter(<App />);
    const fav = screen.getByRole('link', { name: /favorite pokémon/i });
    expect(fav).toBeInTheDocument();
  });
});
