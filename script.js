//your code here

class OutOfRangeError extends Error {
	constructor(params) {
		super(params);
		this.name = "OutOfRangeError";
	}
}

class InvalidExprError extends Error{
	constructor(params) {
		super(params);
		this.name = "InvalidExprError";
	} 
} 

let btn = document.getElementById("btn");

btn.addEventListener('click', (e)=>{
	let input = document.getElementById("input1").value;
	let exprarray = input.split("");
try {
	let op = ["+", "/", "*", "-"]
	op.map(op=>{
		if(exprarray[0] == op || exprarray[exprarray.length-1] == op)
		throw new OutOfRangeError("Expression should not start with invalid operator");
	})
	
	
	if(exprarray.includes("a"))
		throw new InvalidExprError("Expression should only consist of integers and +-/* characters and not ");
	document.write(eval(input));
	
} catch (Error) {
	document.write(Error.message);
}


	
});