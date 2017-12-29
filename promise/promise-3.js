angular.moduele('apps', []).controller('ctrl', ctrl);

function ctrl() {
    // body... 
}

var deferred1 = $q.defer();
var promise1 = deferred1.promise;


promise1.then(function() {
    /* body... */
}).then(function() {
    /* body... */
}).then(function() {
    /* body... */
}).catch();