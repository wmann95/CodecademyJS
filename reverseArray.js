// Write your code here:
function reverseArray(arr){
	let output = [];
	for(var i = arr.length - 1; i >= 0; i--){
		output.push(arr[i]);
	}
	return output;
}

// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];
