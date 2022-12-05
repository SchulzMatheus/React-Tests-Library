import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('Testa o componente NotFound', () => {
  it('Testa se o gif é redenrizado', () => {
    const { getByRole } = render(<NotFound />);
    const image = getByRole('img', { name: /pikachu crying because the page requested was not found/i });
    expect(image.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
    expect(image).toBeInTheDocument();
  });
  it('Testa se contém texto correto', () => {
    const { getByRole } = render(<NotFound />);
    const header = getByRole('heading', { name: /page requested not found/i });
    expect(header).toBeInTheDocument();
  });
});
