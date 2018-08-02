$(document).ready(function(){

$('#chat').on("click", function(){
    $('#chatbox').show();
    $('#chat').hide();
});

$('.fa-angle-up, .close_chatbox').on("click", function(){
    $('#chatbox').hide();
    $('#chat').show();
});

});