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
    'prefigura una soluzione operativa del problema relativo alla forma delle galassie',
    'rivela un grande valore euristico per il superamento di molte difficoltà sperimentali',
    'purché non si dimentichi il principio di sovrapposizione',
    'delinea due possibili soluzioni, l\'una teorica l\'altra osservativa',
    'consente di avvicinare i grandi temi della cosmologia moderna',
    'e una stima anche superficiale dei possibili effetti di sincrotrone',
    'che nell\'astrofisica moderna giocano un ruolo sempre più essenziale.',
    'e una sufficientemente e accurata determinazione dei campi gravitazionali'
  ];

  // Genera un numero random
  function randomNum(num) {
    var random = Math.floor(Math.random() * (num));
    return random;
  }



// Funzione per Azioni che si innescano al click dell'invio messaggio
function sendMessage() {
  var messageTemplate = $('.message-window + .message-wrapper').clone();
  var typedMessage = $('.mex').val();

  var data = new Date();
  var hours = addZero(data.getHours());
  var minutes = addZero(data.getMinutes());
  var time = hours + ':' + minutes;

  messageTemplate.children('p').text(typedMessage);
  messageTemplate.children('time').text(time);

  $('.message-window.active-mex').append(messageTemplate);
  messageTemplate.removeClass('d-none').addClass('sent');

  $('.mex').val('');
  $(".mex").focus();

  $('.vocal-icon').show();
  $('.send-icon').hide();

  // Invia un messaggio dopo un secondo
  setTimeout(function(){
    var mexReceivedTemplate = $('.message-window + .message-wrapper').clone();
    mexReceivedTemplate.children('p').text(frasiCasuali[randomNum(frasiCasuali.length)] + ' 😀');
    mexReceivedTemplate.children('time').text(time);
    $('.message-window.active-mex').append(mexReceivedTemplate);
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


  // Ogni volta che si inserisce una lettera nel campo input .search, parte la funzione che ricerca il testo inserito all'interno di tutti i div .users h4, nasconde quelli in cui non li trova
  $(".search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".users").filter(function() {
      $(this).toggle($(this).find('h4').text().toLowerCase().indexOf(value) > -1)
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


// Azioni al click della freccia su ogni messaggio

$(document).on('click', '.arrow-down', function() {
  $('.dropdown-delete').addClass('d-none');
  $(this).siblings('.dropdown-delete').removeClass('d-none');

  if ($(this).parents('.message-wrapper').hasClass('received')) {
    $(this).siblings('.dropdown-delete').addClass('left-mex');
  } else {
    $(this).siblings('.dropdown-delete').addClass('right-mex');
  }

});

$('.delete').on('click', function() {
  $(this).parent().parent().parent('.message-wrapper').remove();
});



// Apre le diverse conversazioni
$(document).on('click', '.users', function() {

  // attiva e toglie la classe attiva nella lista contatti
  $('.users').removeClass('active');
  $(this).addClass('active');
  $(this).prependTo($('.row4-left-users'));


  // rileva l'attributo degli elementi nella lista contatti
  var userAtt = $(this).attr('data-contact');

  // Toglie la classe attiva su tutti gli elementi
  $('.message-window').removeClass('active-mex');

  // controlla tutte le finestre messaggio e attiva solo quella selezionata
  $('.message-window').each(function() {
      if ($(this).attr('data-contact') == userAtt) {
        $(this).addClass('active-mex')
      }
  });


// Cambia avatar e nome sulla conversazione





});









});
