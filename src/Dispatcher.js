import Store from './Store';
import { StoreRequiredForDispatchException } from './Exceptions/DispatchExceptions';

export default class Dispatcher
{
	/**
	 * UpstreamJS' Dispatcher's Construct
	 *
	 * @return void
	 */
	constructor() {
		this._stores = [];
	}

	/**
	 * Adds the store instance to the dispatcher.
	 *
	 * @param {object} store
	 */
	registerStore(store) {
		this._stores.push(store);
	}

	/**
	 * Dispatches the given action on all stores.
	 *
	 * @param {string} action
	 *
	 * @return void
	 */
	dispatch(action) {
		if (!this._stores.length) {
			throw new StoreRequiredForDispatchException();
		}

		this._stores.forEach(store => {
			const storeObject = store.getStore();
			console.log(store);
			console.log(storeObject);
			storeObject.update(action, store.getChangeCallback.bind(store));
		});
	}
}
