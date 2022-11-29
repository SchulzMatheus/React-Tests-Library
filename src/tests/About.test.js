import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './Utils/renderWithRouter';
import About from '../pages/About';

describe('Testa o componente <About.js />', () => {
  it('Verifica se o header está correto', () => {
    renderWithRouter(<About />);
    const header = screen.getByRole('heading', { name: /about pokédex/i });
    expect(header).toBeInTheDocument();
  });

  it('Verifica se contém as informações corretas;', () => {
    renderWithRouter(<About />);
    const about = screen.getByText(/This application simulates a Pokédex/i);
    expect(about).toBeInTheDocument();
  });

  it('A página deve conter dois paragrafos com informações', () => {
    renderWithRouter(<About />);
    const p1 = screen.getByText(/This application simulates a Pokédex/i);
    const p2 = screen.getByText(/One can filter Pokémon by type/i);
    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
  });

  it('A pagina deve conter uma imagem', () => {
    renderWithRouter(<About />);
    const image = screen.getByRole('img', { name: /pokédex/i });
    expect(image).toBeInTheDocument();
    expect(image.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
