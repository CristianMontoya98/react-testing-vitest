import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Calculator } from './Calculator';
describe('Calculator', () => {
	const useCasesToTest = [
		{ a: 1, b: 2, operation: 'add', expected: 3 },
		{ a: 1, b: 2, operation: 'multiply', expected: 2 },
	];
	it.each(useCasesToTest)('should return $expected when $a $operation $b', ({ a, b, operation, expected }) => {
		render(
			<Calculator
				a={a}
				b={b}
				operation={operation}
			/>
		);
		const result = screen.getByText(`Result: ${expected}`);
		expect(result).toBeInTheDocument();
	});
});
