*****Javascript Execution Context*****
Global Execution context is created every time and refers to this.

Types:
1.Global Execution Context
2.Functional Execution context
3.Eval Execution context(Its comes only when disscuss about mangooes)

Phases:
1.Memory Creation Context
2.Execution context


eg.

let val1 = 10;
let val2 = 20;
function addNum(num1,num2){
	let total = num1 + num2;
	return total;
}


let result1 = addNum(val1,val2);
let result2 = addNum(20,15);


step 1 : Global Execution Context(this)
step 2 :Memory Phase(val1 = undefined,val2 = undefined,addNum = (num1,num2){
	let total = num1 + num2;
	return total;


result1=undefined ,result2 =undefined


step 3 : Execution phase


	)

