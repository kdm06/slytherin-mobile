jQuery(function($){
    var mainScroll = new IScroll("#main",{
        mouseWheel: true,
        scrollbars: true
    });
    
    
    var feedContentScroll = new IScroll("#view-post",{
        mouseWheel: true,
        scrollbars: true
    });
    $('#write').hammer().bind('tap', function(){
        $("#menu-panel").removeClass("menu-panel-shown");
        $("#menu").removeClass("menu-shown");

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
    
    $("#menu").hammer().bind('tap', function(){
        $("#post").removeClass("post-shown");
        $("#write").removeClass("write-open");
        
       $("#menu-panel").toggleClass("menu-panel-shown");
       if($("#menu-panel").is(".menu-panel-shown")){
            $("#menu").addClass("menu-shown");
       }else{
            $("#menu").removeClass("menu-shown");
       }
        
        return false;
         
    });
    
    $(".title a,.more-btn").hammer().bind('tap', function(){
        $("#view-post").css({display:"block"});
        var feedContentScroll = new IScroll("#view-post",{
        mouseWheel: true,
        scrollbars: true
        });
        return false;
    });
    
    $(".back-btn").hammer().bind('tap', function(){
        $("#view-post").css({display:"none"});
        return false;
    });
    
    $("#menu-panel .close-menu").hammer().bind('tap', function(){
       $("#menu-panel").toggleClass("menu-panel-shown");
       if($("#menu-panel").is(".menu-panel-shown")){
            $("#menu").addClass("menu-shown");
       }else{
            $("#menu").removeClass("menu-shown");
       }

        return false;
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
    
    getLocation();
});

function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(savePosition);
        
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function savePosition(position) {
   
    var address;
    $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng="+position.coords.latitude+","+position.coords.longitude, function(key,val){
        address = key;
        address = address.results[2].formatted_address;
        console.log(address);
         $(".location").html(
             address + "<br/>" +
             position.coords.latitude+","+position.coords.longitude
         );
    });
    
    
}