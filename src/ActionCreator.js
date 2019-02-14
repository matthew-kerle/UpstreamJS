import { CreateInvalidTypeParamException } from './Exceptions/ActionCreatorExceptions';

export default class ActionCreator
{
	/**
	 * @param {Dispatcher} dispatcher
	 */
	constructor(dispatcher) {
		this._dispatcher = dispatcher;
	}

	/**
	 * @param {string} type
	 *
	 * @throws {CreateInvalidTypeParamException}
	 *
	 * @return {function}
	 */
	create(type) {
		if (!type) {
			throw new CreateInvalidTypeParamException();
		} else if (!type.length) {
			throw new CreateEmptyTypeParamException();
		}

		return payload => this._dispatcher.dispatch({
			type,
			payload,
		});
	}
}
