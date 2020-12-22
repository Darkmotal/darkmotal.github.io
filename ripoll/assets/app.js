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
    })
    
    $("#close").on("click", function(){
        $("#mobMenu").removeClass("open");
    })
});

