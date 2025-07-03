import { describe, it, expect } from 'vitest';

describe('mi primer test', () => {
	it('la suma de dos numeros', () => {
		const suma = (a: number, b: number) => a + b;
		const resultado = suma(1, 1);
		expect(resultado).toBe(2);
	});
});
