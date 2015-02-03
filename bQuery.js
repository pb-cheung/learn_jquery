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

	jQuery.fn = jQuery.prototype = {};
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
	return jQuery;
}));
