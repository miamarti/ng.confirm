/*
 * autor: Miller Augusto S. Martins
 * e-mail: miller.augusto@gmail.com
 * github: miamarti
 * */
(function(window, document) {
    "use strict";
    (angular.module('ng.confirm', [ 'ng' ])).factory('$confirm', ['$q', function ($q) {
    'use strict';
    
        var ConfirmFactory = function (elem) {
        		this.deferred = $q.defer();
        		this.elem = $(elem);
        		
        		this.show = function(){
        			$(elem).fadeIn();
        		};
        		
        		this.hide = function(){
        			$(elem).fadeOut();
        		};
        		
        		this.set = function(value){
        			if(value){
        				this.deferred.resolve(this.elem);
        				this.hide();
        			} else {
        				this.deferred.reject(this.elem);
        				this.hide();
        			}
        		};
        		
        		this.get = function(){
        			return this.deferred.promise;
        		};
        };
        return ConfirmFactory;
    
    }]);
})(window, document);
