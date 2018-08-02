$(document).ready(function(){
    $(".nav_item1,.inside_nav_div1").mouseover(function(){
        $('.arrow1').css({"transform":"rotate(90deg)"})
        $(".inside_nav_div1").show()}).mouseout(function(){
        $(".inside_nav_div1").hide()
        $('.arrow1').css({"transform":"rotate(-90deg)"})
    });
    $(".nav_item2, .inside_nav_div2").mouseover(function(){
        $('.arrow2').css({"transform":"rotate(90deg)"})
        $(".inside_nav_div2").show()}).mouseout(function(){
        $(".inside_nav_div2").hide()
        $('.arrow2').css({"transform":"rotate(-90deg)"})
    });
    $(".nav_item3, .inside_nav_div3").mouseover(function(){
        $('.arrow3').css({"transform":"rotate(90deg)"})
        $(".inside_nav_div3").show()}).mouseout(function(){
        $('.arrow3').css({"transform":"rotate(-90deg)"})
        $(".inside_nav_div3").hide()
    });
    $(".nav_item4, .inside_nav_div4").mouseover(function(){
        $('.arrow4').css({"transform":"rotate(90deg)"})
        $(".inside_nav_div4").show()}).mouseout(function(){
        $('.arrow4').css({"transform":"rotate(-90deg)"})
        $(".inside_nav_div4").hide()

    });
    $(".nav_item5, .inside_nav_div5").mouseover(function(){
        $('.arrow5').css({"transform":"rotate(90deg)"})
        $(".inside_nav_div5").show()}).mouseout(function(){
        $('.arrow5').css({"transform":"rotate(-90deg)"})
        $(".inside_nav_div5").hide()
    });



    $(".slideUp_button").click(function(){
        $(".slide_up").slideUp();
    });

});



    //scroll top button...
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
  



