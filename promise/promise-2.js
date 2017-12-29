//接下来想实现这样的异步编程模式
//	doSomething().then(function(value) {
//  console.log('Got a value:' + value);
//	});
function doSomeThings () {
	return {
		then:function (cb) {
			var value=666;
			cb(value);
		}
	};
}

doSomeThings().then(function (data) {
	console.log(data);
});


//但这仅仅只是一个语法糖，并没有逃离回调的本质