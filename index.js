function Selector() {

let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let  first=[Math.floor(Math.random()*(who.length))];
let  second=[Math.floor(Math.random()*(action.length))];
let  third=[Math.floor(Math.random()*(what.length))];
let  fourth=[Math.floor(Math.random()*(when.length))];
	
document.getElementById('randomquota').innerHTML = who[first].concat(  " " , action[second] ,  " "  , what[third] , " " , when[fourth]);

	
}