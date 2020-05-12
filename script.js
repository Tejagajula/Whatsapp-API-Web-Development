$(function () {
  $('#WAButton').floatingWhatsApp({
               phone: '+4915735998080', //WhatsApp Business phone number
               headerTitle: 'Chatten Sie mit uns auf WhatsApp!', //Popup Title
               popupMessage: 'Hallo, wie können wir Ihnen helfen?', //Popup Message
               showPopup: true, //Enables popup display
               buttonImage: '<img src="whatsapp.svg" />', //Button Image
               //headerColor: 'crimson', //Custom header color
               //backgroundColor: 'crimson', //Custom background button color
               position: "right" //Position: left | right
  });
});