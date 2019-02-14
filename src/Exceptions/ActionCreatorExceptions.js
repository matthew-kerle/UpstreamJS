export class CreateInvalidTypeParamException extends Error {
	constructor() {
		return new Error('You must provide a type for the action.');
	}
}

export class CreateEmptyTypeParamException extends Error {
	constructor() {
		return new Error('The type of your action must not be empty.');
	}
}
