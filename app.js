// var http = require('http');
// http.createServer(function (req, res){
// 	res.writeHead(200,{'Content-Type':'text/html'});
// 	res.write('<head><meta charset="utf-8"/></head>');
// 	res.end('你好\n');
// }).listen(1337,"127.0.0.1");
// console.log('Server running at http://127.0.0.1:1337/');
//console.log("this is a test string.");
//console.log('$s','user','name','age');
/*console.time("test");
for(var i=0; i<100000000; i++){
	;
}
console.timeEnd("test");*/
/*user = new Object();
user.name = 'liyue';
user.age = 18;
user.sex = 'man';
user.setName = function(name){this.name = name};
user.getName = function(){return this.name};
console.trace('trace');*/

/*var testModule1 = require('./testModule.js');
var testModule2 = require('./testModule.js');
testModule1.outputTestVar("testModule1");
testModule2.outputTestVar("testModule2");
*/
// var testModule = require('./testModule.js');
/*var http = require('http');
var server = http.createServer();
server.once('request',function(req,res){
	if(req.url!=="/favicon.ico"){
		console.log("start");
	}
	
	
});
server.on('request',function(req,res){
	if(req.url!=="/favicon.ico"){
		console.log(req.url);
		res.end();
	}
});
server.once('request',function(req,res){
	if(req.url!=="/favicon.ico"){
		console.log("end");
	}
})
server.listen(1337,'127.0.0.1');*/

/*console.log('hello, world');
 function foo(){
 	console.log('hello, foo');
 	return 100;
 }

 var bar = 'This is a pan.'
 var http = require('http');
 var i = foo();
 console.log(i); */

 var foo = require('./foo.js');
 console.log(foo.printFoo());