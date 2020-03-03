function doubleIt(num){
	return num*2;
}
const result = doubleIt(5);
console.log(result);
//------------------------------------
const doubleIt = function(num){
	return num*2;
}
const result = doubleIt(5);
console.log(result);
//-----------------------------------
const doubleIt = num => num*2;
const result = doubleIt(50);
console.log(result);
//-------------------------------
const add = (x,y) => x+y;
const result = add(50,70);
console.log(result);
//-----------------------------
const give5 = () => 5;
const result = give5();
console.log(result);
//----------------------------
--multiline function, retun must be specific

const doMath = (x,y) => {
	const sum = x + y;
	const diff = x - y;
	const result = sum * diff;
	retun result;
}
const result = doMath(7,5);
console.log(result);