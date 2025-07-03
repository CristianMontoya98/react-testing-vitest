import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
	it('debe renderizar el label correctamente', () => {
		render(<Button label='Mi Botón' />);
		expect(screen.getByRole('button', { name: 'Mi Botón' })).toBeInTheDocument();
	});

	it('debe llamar a onClick cuando se hace click', () => {
		const handleClick = vi.fn();
		render(
			<Button
				label='Click'
				onClick={handleClick}
			/>
		);
		fireEvent.click(screen.getByRole('button', { name: 'Click' }));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('debe tener el tipo "button" por defecto', () => {
		render(<Button label='Default' />);
		expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
	});

	it('debe aceptar el tipo "submit"', () => {
		render(
			<Button
				label='Enviar'
				type='submit'
			/>
		);
		expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
	});

	it('debe aceptar el tipo "reset"', () => {
		render(
			<Button
				label='Resetear'
				type='reset'
			/>
		);
		expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');
	});

	it('debe aplicar la clase de estilos correctamente', () => {
		render(<Button label='Estilos' />);
		expect(screen.getByRole('button')).toHaveClass('_Button_ee73f7');
	});
});
