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




  $(document).on('click', '.send-icon', function() {
    sendMessage();
  });

  $(".mex").keyup(function(event) {
    if (event.keyCode === 13 && $(this).val().length > 0) {
        sendMessage();
    }
  });

  // Frasi casuali da inserire come risposta
  var frasiCasuali = [
    'Il dato relativo alla distribuzione spaziale degli ammassi globulari',
    'Il modello di buco nero',
    'purché non si dimentichi il principio di sovrapposizione',
    'delinea due possibili soluzioni, l\'una teorica l\'altra osservativa',
    'consente di avvicinare i grandi temi della cosmologia moderna',
    'Il problema del big-bang',
    'che nell\'astrofisica moderna giocano un ruolo sempre più essenziale.',
    'e una sufficientemente e accurata determinazione dei campi gravitazionali'
  ];

  // Genera un numero random
  function randomNum(num) {
    var random = Math.floor(Math.random() * (num));
    return random;
  }



// Azioni che si innescano al click dell'invio messaggio
function sendMessage() {
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

  // Invia un messaggio dopo un secondo
  setTimeout(function(){
    var mexReceivedTemplate = $('.message-window + .message-wrapper').clone();
    mexReceivedTemplate.children('p').text(frasiCasuali[randomNum(frasiCasuali.length + 1)] + '😀');
    mexReceivedTemplate.children('time').text(time);
    $('.message-window').append(mexReceivedTemplate);
    mexReceivedTemplate.removeClass('d-none').addClass('received');
  }, 1000);
};

// funzione per aggiungere uno zero sulla data
function addZero(num) {
  if (num < 10) {
    num = '0' + num;
  }
  return num;
}


  // Ogni volta che si inserisce una lettera nel campo input .search, parte la funzione che ricerca il testo inserito all'interno di tutti i div .users, nasconde quelli in cui non li trova
  $(".search").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  $(".users").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
});


// row3-left-search
// Nasconde e rivela icona della ricerca

$(".search").focus(function () {
  $('.icon-input img:first-child').hide();
  $('.icon-input img:last-child').show().removeClass('d-none');
  $(".row3-left-search").css( "background", "white" );
});

$(".search").focusout(function () {
  $('.icon-input img:first-child').show();
  $('.icon-input img:last-child').hide();
  $(".row3-left-search").css( "background", "#F7F7F7" );
});




});
