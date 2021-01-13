function showPage(hash) {
	document.querySelectorAll("[data-tab]").forEach(function(t){
		t.classList.add("hidden");
	});
	document.querySelector(hash).classList.remove("hidden");
	
	document.querySelectorAll("[data-tab-links] li").forEach(function(e){
		e.classList.remove("active");
	});
	//document.querySelector("[data-tab-links] a[href='" + hash + "']").parentElement.classList.add("active");
}

$(document).ready(function(){
	
    $("#accordion").accordion({
        collapsible: true
    });
   
    if (window.location.hash !== "" && window.location.hash !== "#" && document.querySelector("[data-tab-links] a[href='"+window.location.hash+"']") !== null) {
        showPage(window.location.hash);
    }
    else {
        showPage("#stats");
    }
    
     window.addEventListener("hashchange", function(){
        if (document.querySelector("[data-tab]" + window.location.hash) !== null) {
            showPage(window.location.hash);
        }
    });
    
	
	jQuery("document").ready(function($){
	
	var nav = $('.nav-container');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			nav.addClass("f-nav");
			$(".top_menu").css("display", "none");
		} else {
			nav.removeClass("f-nav");
			$(".top_menu").css("display", "block"); 
		}
	});
 
	});
    
    $(".thumbnails a").click(function(){
       var images=$(this).find('img');
       var imgSrc= images.attr('src');
       $(".big-image img").attr({src: imgSrc});
       $(this).siblings('a').removeClass('active');
       images.parent().addClass('active');
       return false;
    });
    
    $(".next").click(function(){
        var count=$(".thumbnails a").length;
        var n=parseInt($(".thumbnails a").index($(".active"))+1);
        var activeImg=$(".thumbnails .active");
        var nextSrc;
        if (count != n){
            nextSrc=activeImg.next().find('img').attr('src');
            $(".thumbnails .active").removeClass('active');
            activeImg.next().addClass('active');
        }
        else {
            nextSrc=$(".thumbnails a").first().find('img').attr('src');
            $(".thumbnails .active").removeClass('active');
            $(".thumbnails a").first().addClass('active');
        }
    
        $(".big-image img").attr({src:nextSrc});
        return false;
    });

    $(".prev").click(function(){
        var count=$(".thumbnails a").length;
        var n=parseInt($(".thumbnails a").index($(".active"))+1);
        var activeImg=$(".thumbnails .active");
        var prevSrc;
        if (n != 1) {
            prevSrc = activeImg.prev().find('img').attr('src');
            $(".thumbnails .active").removeClass('active');
            activeImg.prev().addClass('active');
        }
        else {
            prevSrc = $('.thumbnails a:last').find('img').attr('src');
            $(".thumbnails .active").removeClass('active');
            $('.thumbnails a:last').addClass('active');
        }
        
        $(".big-image img").attr({src:prevSrc});
        
        return false;
    });
});