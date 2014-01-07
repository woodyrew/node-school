"Use Strict";

var sum = 0;
while (process.argv.length > 2) {
	sum += +process.argv.pop();
}
console.log(sum);
