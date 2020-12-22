$(function(){
    var header = $("#header"),
        firstH = $("#sectionF").innerHeight(),
        scrollOffset = $(window).scrollTop();
    
    
    checkScroll(scrollOffset);
    
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset);
    });
    
    
    function checkScroll(scrollOffset) {
        if (scrollOffset >= firstH) {
            header.addClass("active");
        } else {
            header.removeClass("active");
        }
    };
    
    
    
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        $("#mobMenu").removeClass("open");
        
        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top,
            windH = $(window).innerHeight(),
            blockH = $(blockId).innerHeight();
        
        if (blockH <= 700) {
            blockOffset -= windH/2 - blockH/2;
        } else {
            blockOffset -= 77;
        }
        
        $("html, body").animate({
            scrollTop: blockOffset
            }, 500);
    });
    
    $(".work").on("click", function(){
        var source = $(this).attr('src');
        
        $("#modalImage").attr('src', source);
        $("#modal").addClass("active");
        
    });
    
    $("#modal").on("click", function(){
        $("#modal").removeClass("active");
    });
   
    $("#menu").on("click", function(){
        $("#mobMenu").addClass("open");
    });
    
    $("#close").on("click", function(){
        $("#mobMenu").removeClass("open");
    });
    
    
    $("#slider").on("scroll", function(){
        var slideW = $(this).innerWidth(),
            hScroll = $(this).scrollLeft();
        
        if (hScroll >= 2 * slideW) {
            $("#s3").addClass("active");
            $("#s2").removeClass("active");
            $("#s1").removeClass("active");
        } else if (hScroll >= slideW){
            $("#s2").addClass("active");
            $("#s3").removeClass("active");
            $("#s1").removeClass("active");
        } else {
            $("#s1").addClass("active");
            $("#s2").removeClass("active");
            $("#s3").removeClass("active");
        }
        
    });
    
    $(".selector").on("click", function(){
        var slideW = $("#slider").innerWidth(),
            selectorId = $(this).attr('id');
        
        switch (selectorId) {
                case "s1" : $("#slider").scrollLeft(slideW/2);
                break;
                case "s2" : $("#slider").scrollLeft(slideW);
                break;
                case "s3" : $("#slider").scrollLeft(slideW * 2);
                break;
        }
        
    });
    
    
});

