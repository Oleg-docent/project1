var contactForm = (function () {

   var init = function () {
      _setUpListeners();
   };

  var _setUpListeners = function () {
     $('.form-place').on('submit', _submitForm);
    

  };

  var _submitForm = function(ev) {
       console.log('Отправка формы');
       ev.preventDefault();
       

      var form = $(this),
          url = 'contactme.php',
          defObj = _ajaxForm(form, url);
          
        // что-то будем делать с ответом с сервера defObj
   };

   



    var _ajaxForm = function (form, url) {
    console.log('ajax запрос с проверкой');
     if (!validation.validateForm(form)) return false;
     

     
   
       
   };




   return {
    init: init
   };

})();

contactForm.init();