# ng.confirm
Angular ng.confirm

## Bower install de dependency
```
$ bower install ng.confirm --save
```

## Module AngularJS include
```
angular.module('example', ["ngConfirm"]);

angular.module('example').controller('MainCtrl', function ($scope, dribbbleService, $confirm) {
  $scope.msnConfirm = new $confirm('#confirmModal');
  
  $scope.msnConfirm.get().then(function(elm){
		console.log('Yes!');
	});
	$scope.msnConfirm.get().catch(function(elm){
		console.log('No!');
	});
	
	$scope.msnConfirm.set(true);
	$scope.msnConfirm.set(false);
});
```
