import Store from './Store';
import Dispatcher from './Dispatcher';
import ActionCreator from './ActionCreator';

export default class UpstreamJS
{
	constructor() {
		this._dispatcher = new Dispatcher();
		this._actionCreator = new ActionCreator(this._dispatcher);
	}

	/**
	 * @param {string} type
	 *
	 * @return {function}
	 */
	createAction(type) {
		return this._actionCreator.create(type);
	}

	/**
	 * @param {object} store
	 *
	 * @return {function}
	 */
	createSubscriber(store) {
		const newStore = new Store(store);
		this._dispatcher.registerStore(newStore);
		return newStore;
	}
}
