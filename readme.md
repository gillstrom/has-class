# has-class

> Check if an element has the given class.

*Supported in IE8+*


## Install

```
$ npm install --save has-class
```


## Usage

```js
var hasClass = require('has-class');
var el = document.querySelector('div');

hasClass(el, 'foo');
//=> true
```


## Browser API

### hasClass(element, className)

#### element

*Required*  
Type: HTML DOM element

Element to test with.

#### className

*Required*  
Type: `string`

Class name to test against.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
