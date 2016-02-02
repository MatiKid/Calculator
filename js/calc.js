function Calculator() {
	this.total = 0;
	this.lastOperation = [];
};

Calculator.prototype.clearAll = function() {
	this.total = 0;
};

Calculator.prototype.addToLastOperation = function(entry) {
	this.lastOperation += entry;
};

Calculator.prototype.execLastOperation = function() {
	var lastOperationStr = this.lastOperation.join('');   
	this.total = eval(lastOperationStr);
	this.lastOperation = [];
};