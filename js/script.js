$(document).ready(function () {

$(".mex").focus();


  $('.mex').on('keyup', function() {
       if (this.value.length > 0) {
         $('.vocal-icon').hide();
         $('.send-icon').show();
       } else {
         $('.vocal-icon').show();
         $('.send-icon').hide();
       }
  });


  $(document).on('click', '.send-icon', function() {
    var templateCopy = $('.message-window + .message-wrapper').clone();
    var typedMessage = $('.mex').val();

    templateCopy.children('p').text(typedMessage);
    $('.message-window').append(templateCopy);
    $('.message-window .message-wrapper').removeClass('d-none');
    $('.mex').val('');

    $('.vocal-icon').show();
    $('.send-icon').hide();
  });

  $('.message-wrapper').mouseenter(function() {
    $(this).children('.arrow-down').addClass('arrow-down-animation');
    $(this).children('.arrow-down').removeClass('d-none');
  });
  $('.message-wrapper').mouseleave(function() {
    $(this).children('.arrow-down').removeClass('arrow-down-animation');
    $(this).children('.arrow-down').addClass('d-none');
  });




});
