# smooth-parallax.js

Lightweight lib for smooth parallax image scroll effect, written in vanilla JS with no dependencies.

DEMO - Coming Soon

## Usage

### Install
```console
$ npm install smooth-parallax.js
```

### Example
To make it works your `img` element needs to be wrapped.

```html
  <div id="wrapper-id">
    <img src="path-to-your-image.jpg" alt="Some awesome image">
  </div>
```

Then import `SmoothParallax` into your js file.

```js
import SmoothParallax from 'smooth-parallax.js';

const parallax = new SmoothParallax(document.getElementByID('wrapper-id'));

```

## Options

There are the two options that you can edit, such as:

```js
const parallax = new SmoothParallax(element, {
  speed: 10,
  scale: 1.2,
});

```

- `speed` - speed of image translation under the wrapper. Default value for `speed` is *10*. Please adapt the speed of translation according to your element size.
- `scale` - in order to translate your image, it needs to be slightly bigger than wrapper. So with scale we make sure that your image overlaps behind wrapper. Default value for `scale` is *1.2*

## Licence

Licensed under the MIT license.
