# ng.confirm
Angular ng.confirm

<p>
  <img src="https://img.shields.io/badge/ng.confirm-release-green.svg">
  <img src="https://img.shields.io/badge/version-1.0.4-blue.svg">
  <img src="https://img.shields.io/bower/v/bootstrap.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
</p>

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
  
	$scope.msnConfirm.then(function(elm){
		console.log('Yes!');
	});
	$scope.msnConfirm.catch(function(elm){
		console.log('No!');
	});

	$scope.msnConfirm.set(true);
	$scope.msnConfirm.set(false);
});
```
