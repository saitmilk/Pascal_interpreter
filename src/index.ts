import {Interpreter} from './calc';

function main(text: string) {
	try {
		const interpreter = new Interpreter(text);
		const result = interpreter.expr();
		console.log(result);
	} catch (e) {
		console.log(e);
	}
}
