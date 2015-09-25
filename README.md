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
			{ test: /\.esl$/, loader: 'eslisp' }
		]
	},
	eslisp: {
		// A list of paths to be required as transform macros
		transforms: [
			'eslisp-camelify',   // Module name
			'./path/to/macro.js' // Path
		]
	}
}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
