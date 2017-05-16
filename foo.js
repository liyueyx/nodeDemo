/*console.log(module.id);
module.id = 'foo';
console.log(module.id);*/
exports.printFoo = function(){
	//return "foo"
	console.log(__dirname);
	console.log(__filename);
}
