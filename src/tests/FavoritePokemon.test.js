import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './Utils/renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemon';
import App from '../App';

describe('Testa o componente <FavoritePokemons.js />', () => {
  it('Testa se é exibido os favoritos', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /more details/i });
    userEvent.click(link);
    const favorite = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
    userEvent.click(favorite);
    const favoriteLink = screen.getByRole('link', { name: /Favorite Pokémon/i });
    userEvent.click(favoriteLink);
    const checkPokemon = screen.getByText(/Pikachu/i);
    expect(checkPokemon).toBeInTheDocument();
  });

  it('Testa se quando a lista de fav é vazia retorna uma string especifica', () => {
    renderWithRouter(<FavoritePokemons />);
    const checkMessage = screen.getByText(/No favorite Pokémon found/i);
    expect(checkMessage).toBeInTheDocument();
  });
});
