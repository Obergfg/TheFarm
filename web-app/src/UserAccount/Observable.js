/*
  Author: Sebastian
  Co-Authors:
*/
class Observable {
	constructor() {
		this._observers = [];
	}

	addObserver(observer) {
		this._observers.push(observer);
	}

	notifyObservers(changeDetails) {
		this._observers.forEach(observer => {
			observer.update(this, changeDetails);
		});
	}

	removeObserver(observer) {
		this._observers = this._observers.filter(observ => observ !== observer);
	}
}

export default Observable;