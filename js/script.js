$(document).ready(function () {

  $(".mex").focus(function() {
    $('.vocal-icon').hide();
    $('.send-icon').show();
  });

  // $(".mex").focusout(function(){
  //   $('.vocal-icon').show();
  //   $('.send-icon').hide();
  // });

$(document).on('click', '.send-icon', function() {
  var myMessage = $('my-message').clone();
  console.log(myMessage.html());

});




});
