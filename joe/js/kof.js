(function($){
	$.fn.hoverDelay = function(options){
		var defaults = {
			hoverDuring: 200,
			outDuring: 200,
			hoverEvent: function(){
				$.noop();
			},
			outEvent: function(){
				$.noop();    
			}
		};
		var sets = $.extend(defaults,options || {});
		var hoverTimer, outTimer;
		return $(this).each(function(){
			$(this).hover(function(){
				clearTimeout(outTimer);
				hoverTimer = setTimeout(sets.hoverEvent, sets.hoverDuring);
			},function(){
				clearTimeout(hoverTimer);
				outTimer = setTimeout(sets.outEvent, sets.outDuring);
			});    
		});
	}      
})(jQuery);

function hoverEffect(id,classname,target){
$(id).hoverDelay({
	hoverEvent: function(){
		$(target).addClass(classname);
	},
	outEvent: function(){
		$(target).removeClass(classname);
	}
});
}
$(function(){
	hoverEffect("#dashboard","menu-hover","#dashboard");
	hoverEffect("#sitemap","menu-hover","#sitemap");
	hoverEffect("#search-btn","borange",".search");
});