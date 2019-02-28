jQuery(document).ready(function () {
    "use strict";
    $('#slider-carousel').carouFredSel({
        responsive: true,
        width: '100%',
        circular: true,
        scroll: {
            items: 1,
            duration: 500,
            pauseOnHover: true
        },
        auto: true,
        items:
        {
            visible: {
                min: 1,
                max: 1
            },
            height: "variable"
        },
        pagination: {
            container: ".sliderpager",
            pageAnchorBuilder: false
        }
    })
});

$(document).ready(function()
{
    $("#396Final").hover(
        function()
        {
            $(this).attr("src", "gifs/396FinalGIF.gif");
        },
        function()
        {
            $(this).attr("src", "images/396FinalIMG.jpg");
        }                         
    );     
    
    $("#231FunGame").hover(
        function()
        {
            $(this).attr("src", "gifs/231FunGameGIF.gif");
        },
        function()
        {
            $(this).attr("src", "images/231FunGameIMG.jpg");
        }                         
    );    

    $("#396Assignment2").hover(
        function()
        {
            $(this).attr("src", "gifs/396Assignment2GIF.gif");
        },
        function()
        {
            $(this).attr("src", "images/396Assignment2IMG.jpg");
        }                         
    );    

    $("#Impulse").hover(
        function()
        {
            $(this).attr("src", "gifs/ImpulseGIF.gif");
        },
        function()
        {
            $(this).attr("src", "images/ImpulseIMG.jpg");
        }                         
    );   
});