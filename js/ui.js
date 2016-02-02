function UI(operations) {
	this.display = '';
	this.operations = operations;
};

UI.prototype.refreshDisplay = function(entry) {
	this.display += entry;
	$('#display').text(this.display);
};

UI.prototype.clearDisplay = function() {
	this.display = '';
};

UI.prototype.btnListener = function() {
	var self = this;
	var lastPressWasOperation = false;
	var lastOperationUsed = '';

	$('.number').click(function() {
		if(self.display === '0') {
			self.clearDisplay();
		};

		if(lastPressWasOperation) {
			lastPressWasOperation = false;
			self.clearDisplay();
			self.refreshDisplay($(this).text());
		} else {
			self.refreshDisplay($(this).text());
		};
	});

	$('.decimal-point').click(function() {
		if(self.display.indexOf('.') === -1) {
			self.refreshDisplay($(this).text());
		};
	});

	$('.add').click(function() {
		if(!lastPressWasOperation) {
			lastPressWasOperation = true;
		};

		lastOperationUsed = '+';

		if(self.operations.lastOperation.length === 0) {
			self.operations.lastOperation.push(self.display);
			self.operations.lastOperation.push('+');

		} else if(self.operations.lastOperation.length === 1) {
			self.operations.lastOperation.push('+');
			self.operations.lastOperation.push(self.display);
			self.operations.execLastOperation();
			self.operations.lastOperation.push(self.operations.total);
	
		} else if(self.operations.lastOperation.length === 2) {
			self.operations.lastOperation.push(self.display);
			self.operations.execLastOperation();
			self.operations.lastOperation.push(self.operations.total);
		};
	});

	$('.substract').click(function() {
		if(!lastPressWasOperation) {
			lastPressWasOperation = true;
		};

		lastOperationUsed = '-';

		if(self.operations.lastOperation.length === 0) {
			self.operations.lastOperation.push(self.display);
			self.operations.lastOperation.push('-');
			
		} else if(self.operations.lastOperation.length === 1) {
			self.operations.lastOperation.push('-');
			self.operations.lastOperation.push(self.display);
			self.operations.execLastOperation();
			self.operations.lastOperation.push(self.operations.total);
	
		} else if(self.operations.lastOperation.length === 2) {
			self.operations.lastOperation.push(self.display);
			self.operations.execLastOperation();
			self.operations.lastOperation.push(self.operations.total);
		};

	});

	$('.multiply').click(function() {
		if(!lastPressWasOperation) {
			lastPressWasOperation = true;
		};

		lastOperationUsed = '*';

		if(self.operations.lastOperation.length === 0) {
			self.operations.lastOperation.push(self.display);
			self.operations.lastOperation.push('*');

		} else if(self.operations.lastOperation.length === 1) {
			self.operations.lastOperation.push('*');
			self.operations.lastOperation.push(self.display);
			self.operations.execLastOperation();
			self.operations.lastOperation.push(self.operations.total);
	
		} else if(self.operations.lastOperation.length === 2) {
			self.operations.lastOperation.push(self.display);
			self.operations.execLastOperation();
			self.operations.lastOperation.push(self.operations.total);
		};
	});

	$('.divide').click(function() {
		if(!lastPressWasOperation) {
			lastPressWasOperation = true;
		};

		lastOperationUsed = '/';

		if(self.operations.lastOperation.length === 0) {
			self.operations.lastOperation.push(self.display);
			self.operations.lastOperation.push('/');

		} else if(self.operations.lastOperation.length === 1) {
			self.operations.lastOperation.push('/');
			self.operations.lastOperation.push(self.display);
			self.operations.execLastOperation();
			self.operations.lastOperation.push(self.operations.total);
	
		} else if(self.operations.lastOperation.length === 2) {
			self.operations.lastOperation.push(self.display);
			self.operations.execLastOperation();
			self.operations.lastOperation.push(self.operations.total);
		};

	});

	$('.total').click(function() {
		if(self.operations.lastOperation.length === 1) {
			self.operations.lastOperation.push(lastOperationUsed);
			self.operations.lastOperation.push(self.display);
			self.operations.execLastOperation();
		} else if(self.operations.lastOperation.length === 2) {
			self.operations.lastOperation.push(self.display);
			self.operations.execLastOperation();
		};
		
		self.clearDisplay();
		self.refreshDisplay(self.operations.total);
	});

	$('.clear').click(function() {
		self.clearDisplay();
		self.refreshDisplay('0');
	});

	$('.clear-all').click(function() {
		self.operations.clearAll();
		self.clearDisplay();
		self.refreshDisplay(self.operations.total);
	});
};

UI.prototype.start = function() {
	this.refreshDisplay(this.operations.total);
	this.btnListener();
};