/**
 * @todo: make this more of an actual class.
 * Should have "actions" that define each
 * case instead of a switch and inline mutations.
 */
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

const CounterStore = {
	_data: {
		value: 0,
	},
	getValue: function() {
		return this._data.value;
	},
	update: function(action, change) {
		switch (action.type) {
			case INCREASE:
				this._data.value += 1;
				console.log(`New Value: ${this._data.value}`);
				break;
			case DECREASE:
				this._data.value -= 1;
				console.log(`New Value: ${this._data.value}`);
				break;
			default:
				break;
		}
		change();
	},
}

export default CounterStore;
