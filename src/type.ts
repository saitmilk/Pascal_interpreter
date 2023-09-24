export enum Type {
	START,
	INTEGER,
	PLUS,
	EOF,
}

export class Token {
	constructor(readonly type: Type, readonly value: string) {
		this.type = type;
		this.value = value;
	}
}
