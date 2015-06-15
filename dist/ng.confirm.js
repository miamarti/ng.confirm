/*
 * autor: Miller Augusto S. Martins
 * e-mail: miller.augusto@gmail.com
 * github: miamarti
 * */
(function(window, document) {
    "use strict";
    (angular.module('ngConfirm', [ 'ng' ])).factory('$confirm', ['$q', function ($q) {
    		
        var ConfirmFactory = function (elem) {
        		this.elem = $(elem);
				this.resolve = new Function();
				this.reject = new Function();
			
        		this.show = function(){
        			$(elem).fadeIn();
        		};
        		
        		this.hide = function(){
        			$(elem).fadeOut();
        		};
        		
        		this.set = function(value){
        			if(value){
        				this.resolve(this.elem);
        				this.hide();
        			} else {
        				this.reject(this.elem);
        				this.hide();
        			}
        		};
        				
				this.then = function(callback){
					this.resolve = callback;
				};
			
				this.catch = function(callback){
					this.reject = callback;
				}
        };
        return ConfirmFactory;
    
    }]);
})(window, document);
