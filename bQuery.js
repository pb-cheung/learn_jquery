(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

var	jQuery = function( selector, context ) {
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {
	//101-194行
	init: function(selector,context,rootjQuery){
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			//HANDLE HTML strings
			if(typeof selector === "string"){
				if(selector.charAt(0) === "<" && selector.charAt(selector.length -1 ) === ">" && selector.length >= 3){
					//Assume that strings that start and end with <> are HTML and skip the regex check
					match = [null, selector, null];
				}else {
					match = rquickExpr.exec(selector);
				}
			//HANDLE:$(DOMElement)
			}else if( selector.nodeType ){

			//HANDLE:$(function)
			//Shortcut for document ready
			}else if(jQuery.isFunction(selector)){

			}

			if(selector.selector !=== undefined){

			}

			return jQuery.makeArray(selector, this);

		}

		//其他
};//end of jQuery.fn

	//核心方法
	//回归调用
	//异步队列
	//数据缓存
	//队列操作
	//选择器引
	//属性操作
	//节点遍历
	//文档处理
	//样式操作
	//属性操作
	//事件体系
	//ajax交互
	//动画引擎
	
	jQuery.fn.init.prototype = jQuery.fn;

	window.jQuery = window.$ = jQuery;

	return jQuery;
}));
