import UpstreamJS from '../src/UpstreamJS';
import CounterStore, { INCREASE, DECREASE } from './CounterStore';

const upstream = new UpstreamJS();

const counterStore = upstream.createSubscriber(CounterStore);

console.log('Store');
console.log(counterStore);
const actions = {
	increase: upstream.createAction(INCREASE),
	decrease: upstream.createAction(DECREASE),
};

const View = (subscribeToStore, increase, decrease) => {
	const counterElem = document.getElementById('counter');
	const displayElem = document.getElementById('display-value');
	const increaseElem = document.getElementById('increase');
	const decreaseElem = document.getElementById('decrease');
	let value;

	const render = (value) => {
		console.log('Display Element:', displayElem);
		console.log(`Updated Value in Index.js: ${value}`);
		displayElem.innerHTML = value;
	};
	const updateState = store => value = store.getValue();

	subscribeToStore(updateState, render);

	increaseElem.addEventListener('click', increase);
	decreaseElem.addEventListener('click', decrease);
};

View(counterStore.getSubscriber(), actions.increase, actions.decrease);
