# ng.confirm
Angular ng.confirm

## Bower install de dependency
```
$ bower install ng.confirm --save
```

## HTML dependency
```
<script src="bower_components/ng.confirm/dist/ng.confirm.min.js"></script>
```

## Module AngularJS include
```
angular.module('example', ["ngConfirm"]);

angular.module('example').controller('MainCtrl', function ($scope, $confirm) {
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
