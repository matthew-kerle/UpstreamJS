export class StoreRequiredForDispatchException extends Error {
	constructor() {
		throw new Error('You must have at least one valid store before trying to dispatch an action.');
	}
}
