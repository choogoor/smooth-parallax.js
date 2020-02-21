import EventEmitter from './events.js';

export default class SmoothParalax {
  constructor(element, options = {}) {
    this.element = element;
    this.options = Object.assign({
      speed: 10,
    }, options);

    this.events = new EventEmitter();

    this.scrollY = window.scrollY;
    this.top = this.scrollY + this.element.getBoundingClientRect().top;

    this._loop();
  }

  on(...args) {
    return this.events.on(...args);
  }

  off(...args) {
    return this.events.off(...args);
  }

  _loop() {
    const scrollY = window.scrollY;
    if (this.scrollY !== scrollY) {
      this.scrollY = scrollY;
      this._scroll();
    }

    window.requestAnimationFrame(this._loop.bind(this));
  }

  _scroll() {
    if (!this._isInViewport()) {
      return;
    }

    this.element.firstChild.style.transform = 'translateY(' + (this.scrollY - this.top) / this.options.speed + 'px)';
    this.events.emit('reveal', this.element, this.scrollY);
  }

  _isInViewport() {
    const elementTop = this.element.offsetTop;
    const elementBottom = this.element.offsetTop + this.element.offsetHeight;
    const viewportBottom = this.scrollY + window.innerHeight;

    return elementBottom > this.scrollY && elementTop < viewportBottom;
  }
};
