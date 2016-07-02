var arrays = [[1, 2, 3], [4, 5], [6]];
var newArray = [];

Array.prototype.flattenArray = function() {
		newArray = this.reduce(concatArray)
	return newArray;
};

function concatArray(previousValue, currentValue){
	return previousValue.concat(currentValue);
}

console.log(arrays.flattenArray());