jQuery(function($){
    var mainScroll = new IScroll("#main",{
        mouseWheel: true,
        scrollbars: true
    });
    
    var feedContentScroll = new IScroll("#view-post",{
        mouseWheel: true,
        scrollbars: true
    });
   /*var writeBtn = new Hammer($("#write").get(0));
    writeBtn.on('tap', function(ev) {
        $("#post").addClass("post-shown");
        $(this).scrollTop(0);
        return false;
    });
    
    var closePostBtn = new Hammer($("#close-post").get(0));
    closePostBtn.on('tap', function(ev) {
        $("#post").removeClass("post-shown");
        return false;
    });*/
    
    $('#write').hammer().bind('tap', function(){
        $("#post").toggleClass("post-shown");
            if($("#post").is(".post-shown")){
                $("#write").addClass("write-open");
            }else{
                $("#write").removeClass("write-open");
            }
        
        return false;
    });
    
    $('#close-post').hammer().bind('tap', function(){
        $("#post").removeClass("post-shown");
       $("#write").removeClass("write-open");
        return false;
         
    });
    
    $(".title a,.more-btn").hammer().bind('tap', function(){
        $("#view-post").css({display:"block"});
        var feedContentScroll = new IScroll("#view-post",{
        mouseWheel: true,
        scrollbars: true
        });
    });
    
    $(".back-btn").hammer().bind('tap', function(){
        $("#view-post").css({display:"none"});
    });
    
    $("#action-post").hammer().bind('tap', function(){
        $.getJSON("/test-data/test.json",function(data){
            var employee;
            $.each(data, function(key, val){
                employee = val;
            });
            
            alert(employee[0].firstName);
            
        })
    });
});