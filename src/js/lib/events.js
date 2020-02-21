export default class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    if (!this.hasListenerFor(event)) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event, callback) {
    if (!this.hasListenerFor(event)) {
      return;
    }

    this.listeners[event] = this.listeners[event].filter(c => c !== callback);
  }

  emit(event, ...args) {
    if (!this.hasListenerFor(event)) {
      return;
    }

    this.listeners[event].forEach(cb => cb.call(this, ...args));
  }

  clear() {
    this.listeners = {};
  }

  hasListenerFor(event) {
    return (event in this.listeners) && this.listeners[event].length > 0;
  }
}
