# eslisp loader for webpack

## Installation

`npm install eslisp-loader --save-dev`

## Usage

``` javascript
var exportsOfFile = require("eslisp!./file.esl");
// => return exports of executed and compiled file.esl
```

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

### Configuration

``` javascript
{
	module: {
		loaders: [
			{ test: /\.esl$/, loader: 'eslisp' },
		]
	}
}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
