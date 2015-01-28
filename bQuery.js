
//jquery
(function( window, undefined ) {
	var jQuery = (function() {
	// 构建jQuery对象
		var jQuery = function( selector, context ) {
			return new jQuery.fn.init( selector, context, rootjQuery );
		}
		// jQuery对象原型

		jQuery.fn = jQuery.prototype = {
			constructor: jQuery,
			init: function( selector, context, rootjQuery ) {
			// selector有以下7种分支情况：
			// DOM元素
			// body（优化）
			// 字符串：HTML标签、HTML字符串、#id、选择器表达式
			// 函数（作为ready回调函数）
			// 最后返回伪数组
			}
		};

		// Give the init function the jQuery prototype for later instantiation
		jQuery.fn.init.prototype = jQuery.fn;
		// 合并内容到第一个参数中，后续大部分功能都通过该函数扩展

		return jQuery;
	})();

	window.jQuery = window.$ = jQuery;

})(window);