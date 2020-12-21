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
        
        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top,
            windH = $(window).innerHeight(),
            blockH = $(blockId).innerHeight();
        
        if (blockH <= 700) {
            blockOffset -= windH/2 - blockH/2;
        };
        
        $("html, body").animate({
            scrollTop: blockOffset
            }, 500);
    });
    
    
});