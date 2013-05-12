

// 侧边栏控制及窗口尺寸设置
var bar = $(".sidebar"),
body = $("body"),
btn = $("#logo");
function caseA() {
body.animate({marginLeft:"0",width:$(window).width()},200);
bar.hide("fast");
}
function caseB() {
body.animate({width:$(window).width()-bar.width(),marginLeft:bar.width()},200);
bar.show("fast");
}		
if 	(bar.css("display") == "block") {
body.css({"width":$(window).width()-bar.width(),"margin-left":bar.width()});
btn.toggle(
	  function(){caseA()},
	  function(){caseB()}
);
}
else{
btn.toggle(
	  function(){caseB()},
	  function(){caseA()}
);
}
$(window).resize(function(){
body.width($(window).width()-parseInt(body.css("margin-left")));
});

// 网格排版
var $container = $('.grid-list'),
	$item = $container.find('.item')
function makeGird(i) {
	var $boxWidth = parseInt($container.width() / i);
	$item.width($boxWidth);
	$item.height($boxWidth*0.96);
	$item.find('a').width($boxWidth-1)
	$item.find('a').height($boxWidth*0.96-1)
	$container.isotope({
	  masonry: { 
	  	columnWidth: $boxWidth, 
	  	isFitWidth: true
	  },
	  animationEngine : 'jquery'
	});
}
function dispalyGrid() {
	var $baseGridWidth = 300,
	$gridNum = parseInt($container.width()/$baseGridWidth);
	makeGird($gridNum);
};
dispalyGrid();
$(window).smartresize(function(){
	dispalyGrid();
});

//封面大小控制
skrollr.init({
			forceHeight: false
		});
