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
    var templateCopy = $('.message-window + .template').clone();
    var typedMessage = $('.mex').val();

    templateCopy.children().text(typedMessage);
    $('.message-window').append(templateCopy);
    $('.message-window .template').removeClass('d-none');

  });




});
