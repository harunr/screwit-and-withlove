
;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('input:text,input:password,textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
		$('input:text,input:password,textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
		// Ends input common focus and blur for value.
		

        $("#phone-nav").click(function(){
            console.log("I am clicked")
            $(".menu-area").slideToggle()
            
        })
        
        if($(".home-page-content").length){
            $("body").addClass("home-page-body")
        }
        
        $("#tab-item-wrap > .tab-item").eq(0).addClass("active")
        $("#tab-content-wrap > .tab-content").hide()
        $("#tab-content-wrap > .tab-content").eq(0).show()
        
        $("#tab-item-wrap > .tab-item").each(function(i){
            $(this).click(function(){
                
                if($(this).hasClass("active")) return false
                
                else{
                    $("#tab-item-wrap > .tab-item").removeClass("active")
                    $(this).addClass("active")
                    $("#tab-content-wrap > .tab-content").hide()
                    $("#tab-content-wrap > .tab-content").eq(i).show()
                }
            })
        })
        
        $("#enquiries-triger").click(function(e){
            e.preventDefault()
            $("#popup-container").fadeIn()
            $(this).parent().addClass("active")
            $("body, html").stop(true, true).animate({
                scrollTop: $("#popup-container").offset().top - 117
            }, 10)
            
            if($(window).width() < 768){
                $(".menu-area").slideUp()
            }
        })
        
        $("#close-btn").click(function(){
            $("#popup-container").fadeOut()
            $("#enquiries-triger").parent().removeClass("active")
        })
        
        $("#about-triger").click(function(e){
            e.preventDefault()
            $("#about-popup").fadeIn()
            $(this).parent().addClass("active")
            $("body, html").stop(true, true).animate({
                scrollTop: $("#about-popup").offset().top - 0
            }, 10)
            
            if($(window).width() < 768){
                $(".menu-area").slideUp()
            }
        })
        
        $("#about-close").click(function(){
            $("#about-popup").fadeOut()
            $("#about-triger").parent().removeClass("active")
        })
        
        $("#say-hello").click(function(e){
            e.preventDefault()
            $("#say-hello-popup").fadeIn()
            $(this).parent().addClass("active")
            $("body, html").stop(true, true).animate({
                scrollTop: $("#say-hello-popup").offset().top - 0
            }, 10)
        })
        
        $("#popup-close-btn").click(function(){
            $("#say-hello-popup").fadeOut()
        })
        
        
        
        if($(".datepicker").length){
            $( ".datepicker" ).datepicker();
        }
        
        
        $(window).scroll(function(){
            if($(window).scrollTop() > 10){
                $("body").addClass("fixed")
            }
            else{
                $("body").removeClass("fixed")
            }
        })
        
        
		
	})// End ready function.

	

})(jQuery)
