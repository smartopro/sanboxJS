class Emitter {
    constructor() {
        this.listeners = {};
    }

    subscribe(eventName, fn) {
        this.listeners[eventName] = this.listeners[eventName] || [];
        this.listeners[eventName].push(fn);
        return () => {
            this.listeners[eventName] = this.listeners[eventName].filter(item => item !== fn);
        };
    }

    unsubscribe(eventName, fn) {
        this.listeners[eventName] = this.listeners[eventName].filter(item => item !== fn);
        return this;
    }

    emit(eventName, ...args) {
        if (Array.isArray(this.listeners[eventName])) {
            this.listeners[eventName].forEach(listener => {
                listener(...args);
            });
            return true;
        } else {
            return false;
        }
    }
}

const emitter = new Emitter();
const f = emitter.subscribe("Ilya", data => {
    console.log("Ilya's event", data);
});
emitter.emit("Ilya", 42);
