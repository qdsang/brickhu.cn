
	var bar = $(".sidebar"),
		body = $("body"),
		btn = $(".btn-sidebar");
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
