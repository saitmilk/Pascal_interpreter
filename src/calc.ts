import {Token, Type} from './type';
import {isNum} from './utils';

export class Interpreter {
	currentToken = new Token(Type.START, '');

	private pos = 0;

	constructor(private readonly text: string) {}

	error(scope: string) {
		throw new Error(`Error parsing input: ${scope}`);
	}

	getNextToken() {
		if (this.pos > this.text.length - 1) {
			return new Token(Type.EOF, '');
		}

		const currentChar = this.text[this.pos];

		if (isNum(currentChar)) {
			const token = new Token(Type.INTEGER, currentChar);
			this.pos += 1;
			return token;
		}

		if (currentChar === '+') {
			const token = new Token(Type.PLUS, currentChar);
			this.pos += 1;
			return token;
		}

		throw new Error('Error parsing input: get next token');
	}

	eat(type: Type) {
		if (this.currentToken.type === type) {
			this.currentToken = this.getNextToken();
		} else {
			throw new Error('Error parsing input: eat token');
		}
	}

	expr() {
		this.currentToken = this.getNextToken();

		const left = this.currentToken;
		this.eat(Type.INTEGER);

		const op = this.currentToken;
		this.eat(Type.PLUS);

		const right = this.currentToken;
		this.eat(Type.INTEGER);

		const result = parseInt(left.value, 10) + parseInt(right.value, 10);
		return result;
	}
}
