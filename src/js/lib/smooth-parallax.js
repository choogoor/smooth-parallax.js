export default class SmoothParalax {
  constructor(element, options = {}) {
    this.element = element;
    this.options = Object.assign({
      speed: 10,
      scale: 1.2
    }, options);

    this.scrollY = window.scrollY;
    this.top = this.scrollY + this.element.getBoundingClientRect().top;

    this._init();
    this._loop();
  }

  _loop() {
    const scrollY = window.scrollY;
    if (this.scrollY !== scrollY) {
      this.scrollY = scrollY;
      this._scroll();
    }

    window.requestAnimationFrame(this._loop.bind(this));
  }

  _init() {
    this.element.style.overflow = 'hidden';
    this.element.firstChild.style.objectFit = 'cover';
    this.element.firstChild.style.willChange = 'transform';
    this.element.firstChild.style.height = this.options.scale * 100 + '%'
  }

  _scroll() {
    if (!this._isInViewport()) {
      return;
    }

    this.element.firstChild.style.transform = 'translateY(' + (this.scrollY - this.top) / this.options.speed + 'px)';
  }

  _isInViewport() {
    const elementTop = this.element.offsetTop;
    const elementBottom = this.element.offsetTop + this.element.offsetHeight;
    const viewportBottom = this.scrollY + window.innerHeight;

    return elementBottom > this.scrollY && elementTop < viewportBottom;
  }

  destroy() {
    this.element.style.overflow = '';
    this.element.firstChild.style.objectFit = '';
    this.element.firstChild.style.willChange = '';
    this.element.firstChild.style.height = '';
  }
};
