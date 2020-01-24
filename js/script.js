$(document).ready(function () {

// Mette il focus sull'input principale appena apri il sito
$(".mex").focus();

  // Nasconde e mostra l'icona per inviare il messaggio
  $('.mex').on('keyup', function() {
       if (this.value.length > 0) {
         $('.vocal-icon').hide();
         $('.send-icon').show();
       } else {
         $('.vocal-icon').show();
         $('.send-icon').hide();
       }
  });

  // Azioni che si innescano al click dell'invio messaggio
  $(document).on('click', '.send-icon', function() {
    var templateCopy = $('.message-window + .message-wrapper').clone();
    var typedMessage = $('.mex').val();

    templateCopy.children('p').text(typedMessage);
    $('.message-window').append(templateCopy);
    $('.message-window .message-wrapper').removeClass('d-none');
    $('.mex').val('');
    $(".mex").focus();

    $('.vocal-icon').show();
    $('.send-icon').hide();
  });

  // Azioni che si innescano all'hover del box messaggio inviato
  $('.message-wrapper').mouseenter(function() {
    $(this).children('.arrow-down').addClass('arrow-down-animation');
    $(this).children('.arrow-down').removeClass('d-none');
  });
  $('.message-wrapper').mouseleave(function() {
    $(this).children('.arrow-down').removeClass('arrow-down-animation');
    $(this).children('.arrow-down').addClass('d-none');
  });




});
