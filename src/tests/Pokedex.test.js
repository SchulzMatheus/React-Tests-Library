import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './Utils/renderWithRouter';
import App from '../App';

describe('Testa o componente Pokedex', () => {
  it('Teste se o h2 contém o texto correto', () => {
    renderWithRouter(<App />);
    const header = screen.getByRole('heading', { name: /Encountered Pokémon/i });
    expect(header).toBeInTheDocument();
  });

  it('testa se o botão funciona corretamente', () => {
    renderWithRouter(<App />);
    const btn = screen.getByRole('button', { name: /Próximo pokémon/i });
    for (let index = 0; index < 5; index += 1) {
      userEvent.click(btn);
    }
    const pokemon = screen.getByText(/Mew/i);
    expect(pokemon).toBeInTheDocument();
  });

  it('Testa se a quantidade de pokemon está correta', () => {
    renderWithRouter(<App />);
    const pokemon = screen.getAllByText(/Pikachu/i);
    expect(pokemon.length).toBe(1);
  });

  it('Testa filtro', () => {
    renderWithRouter(<App />);
    const AllButton = screen.getByRole('button', { name: /All/i });
    expect(AllButton).toBeInTheDocument();
    const ElectricButton = screen.getByRole('button', { name: /Electric/i });
    expect(ElectricButton).toBeInTheDocument();
    const FireButton = screen.getByRole('button', { name: /Fire/i });
    expect(FireButton).toBeInTheDocument();
    const BugButton = screen.getByRole('button', { name: /Bug/i });
    expect(BugButton).toBeInTheDocument();
    const PoisonButton = screen.getByRole('button', { name: /Poison/i });
    expect(PoisonButton).toBeInTheDocument();
    const PsychicButton = screen.getByRole('button', { name: /Psychic/i });
    expect(PsychicButton).toBeInTheDocument();
    const NormalButton = screen.getByRole('button', { name: /Normal/i });
    expect(NormalButton).toBeInTheDocument();
    const DragonButton = screen.getByRole('button', { name: /Dragon/i });
    expect(DragonButton).toBeInTheDocument();
  });

  it('Testa o clean filter', () => {
    renderWithRouter(<App />);
    const ResetButton = screen.getByRole('button', { name: /All/i });
    expect(ResetButton).toBeInTheDocument();
  });

  it('Testa o data teste id', () => {
    renderWithRouter(<App />);
    const AllButton = screen.getByRole('button', { name: /All/i });
    expect(AllButton).toBeInTheDocument();
    const Buttons = screen.getAllByTestId('pokemon-type-button');
    expect(Buttons.length).toBe(7);
  });

  it('Testa se o botão all é funcional', () => {
    renderWithRouter(<App />);
    const AllButton = screen.getByRole('button', { name: /All/i });
    expect(AllButton).toBeInTheDocument();
    userEvent.click(AllButton);
    const Pokemon = screen.getByText(/Pikachu/i);
    expect(Pokemon).toBeInTheDocument();
  });
});
