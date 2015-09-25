var loaderUtils = require("loader-utils");
var eslisp = require("eslisp");

module.exports = function (source) {
	this.cacheable && this.cacheable();

	//var eslispRequest = loaderUtils.getRemainingRequest(this);
	//var jsRequest = loaderUtils.getCurrentRequest(this);
	var query = loaderUtils.parseQuery(this.query);

	query.transformMacros = this.eslisp.tranforms.map(require);

	var result = eslisp(source, query);

	this.callback(null, result);
};
