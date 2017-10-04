$(document).ready(function() {
	$('.menu-toggle').click(function() {
	  $('.site-nav').toggleClass('site-nav--open', 500);
	  $(this).toggleClass('open');
	});
	
	var target = $('#text-banner');
	var targetHeight = target.outerHeight();
	
	$(document).scroll(function(e){
		var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
		if(scrollPercent >= 0){
			target.css('opacity', scrollPercent);
		}
	});
});


function loaded() {
	var pct = 0,
  div_loading_progress = document.getElementById("div_loading_progress");


function display_pct(p) {
  div_loading_progress.className="c100 p"+p;
}

function update_pct(){
  display_pct(pct++);
  		
  if (pct<=70) {
			setTimeout(update_pct,15);
  }
}

setTimeout(update_pct,500);



var pct2 = 0,
  div_loading_progress2 = document.getElementById("div_loading_progress2");


function display_pct2(p) {
  div_loading_progress2.className="c100 p"+p;
}

function update_pct2(){
  display_pct2(pct2++);
  		
  if (pct2<=50) {
			setTimeout(update_pct2,15);
  }
}

setTimeout(update_pct2,500);


var pct3 = 0,
  div_loading_progress3 = document.getElementById("div_loading_progress3");


function display_pct3(p) {
  div_loading_progress3.className="c100 p"+p;
}

function update_pct3(){
  display_pct3(pct3++);
  		
  if (pct3<=100) {
			setTimeout(update_pct3,15);
  }
}

setTimeout(update_pct3,500);
};
