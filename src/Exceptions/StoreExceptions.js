export class InvalidStoreObjectException extends Error {
	constructor() {
		throw new Error('You must pass a valid store object.');
	}
}

// export class MissingSetInitialStateMethodException extends Error {
// 	constructor() {
// 		throw new Error('Your store must include a valid "setInitialState" method.');
// 	}
// }
//
// export class SetInitialStateInvalidReturnException extends Error {
// 	constructor() {
// 		throw new Error('Your store\'s "setInitialState" method must return an object.');
// 	}
// }

export class MissingUpdateStoreMethodException extends Error {
	constructor() {
		throw new Error('Your store must include a valid update method.');
	}
}
