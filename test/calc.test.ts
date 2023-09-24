import fs from 'fs';
import {Interpreter} from '../src/calc';

const data = fs.readFileSync('./test/asset/data.txt', 'utf8');
const exprList = data.split('\n');

describe('test the calculator', () => {
	exprList.forEach(expression => {
		const [expr, result] = expression.split('=');
		it(`expression ${expr} equals ${result}`, () => {
			const interpreter = new Interpreter(expr);
			expect(interpreter.expr()).toBe(parseInt(result, 10));
		});
	});
});
