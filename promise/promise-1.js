//首先是传统的异步编程
function doSomeThings(cb) {
    var value = 5;
    cb(value);
}

doSomeThings(function (data) {
    console.log(data);
});
