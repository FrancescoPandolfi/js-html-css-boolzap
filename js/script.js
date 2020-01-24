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
    var messageTemplate = $('.message-window + .message-wrapper').clone();
    var typedMessage = $('.mex').val();

    var data = new Date();
    var hours = addZero(data.getHours());
    var minutes = addZero(data.getMinutes());
    var time = hours + ':' + minutes;

    messageTemplate.children('p').text(typedMessage);
    messageTemplate.children('time').text(time);

    $('.message-window').append(messageTemplate);
    messageTemplate.removeClass('d-none').addClass('sent');

    $('.mex').val('');
    $(".mex").focus();

    $('.vocal-icon').show();
    $('.send-icon').hide();

    setTimeout(function(){
      var mexReceivedTemplate = $('.message-window + .message-wrapper').clone();
      mexReceivedTemplate.children('p').text('Che fai di bello? 😀😀😀');
      mexReceivedTemplate.children('time').text(time);
      $('.message-window').append(mexReceivedTemplate);
      mexReceivedTemplate.removeClass('d-none').addClass('received');
    }, 3000);



  });



function addZero(num) {
  if (num < 10) {
    num = '0' + num;
  }
  return num;
}




//   $(".search").on("keyup", function() {
//   var value = $(this).val().toLowerCase();
//   $("#myTable tr").filter(function() {
//     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//   });
// });



});
