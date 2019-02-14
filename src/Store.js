import {
	InvalidStoreObjectException,
	MissingUpdateStoreMethodException,
	StoreRequiredForDispatchException,
} from './Exceptions/StoreExceptions';

export default class Store
{
	/**
	 * @param {object} store
	 *
	 * @throws {InvalidStoreObjectException}
	 * @throws {MissingUpdateStoreMethodException}
	 *
	 * @return void
	 */
	constructor(store) {
		if (!store || typeof store !== 'object') {
			throw new InvalidStoreObjectException();
		}

		// if (typeof store.setInitialState !== 'function') {
		// 	throw new MissingSetInitialStateMethodException();
		// } else if (typeof store.setInitialState() !== 'object') {
		// 	throw new SetInitialStateInvalidReturnException();
		// }

		if (typeof store.update !== 'function') {
			throw new MissingUpdateStoreMethodException();
		}

		this._consumers = [];
		this._store = store;
		// this._state = this._getInitialState();
		// this._changeCallback = this._getChangeCallback();
		this._subscriber = this._getSubscriberForConsumer();
	}

	/**
	 * @return {object}
	 */
	getStore() {
		return this._store;
	}

	/**
	 * Returns the stores subscriber.
	 *
	 * @return {function}
	 */
	getSubscriber() {
		return this._subscriber;
	}

	/**
	 * Gets the initial state from the inputted store.
	 *
	 * @todo implement in stores.
	 * @return {object}
	 */
	_getInitialState() {
		return this._store.getInitialState();
	}

	/**
	 * Returns the change callback for the given store.
	 *
	 * var change = function () {...
	 *
	 * @return {function}
	 */
	getChangeCallback() {
		console.log('Change Called');
		console.log('Consumers When Called', this);
		return this._consumers.forEach(
				consumer => {
					console.log("Consumer", consumer);
					console.log(this._store);
					console.log(consumer(this._store));
					return consumer(this._store);
				}
			);
	}

	/**
	 * Returns the subscriber for the store.
	 *
	 * var subscribe = function (consumer) {
	 *
	 * @return {function}
	 */
	_getSubscriberForConsumer() {
		return (consumer, initialRender = false) => {
			this._consumers.push(consumer);
			return initialRender !== false ? consumer(this._store) : null;
		};
	}
}
