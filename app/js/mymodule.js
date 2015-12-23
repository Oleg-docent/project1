var myModule = (function () {

  var init = function () {
    _setUpListeners();
    // то, что должно произойти сразу
  };

   var _getNameFromPath = function (path) {
        return path.replace(/\\/g, '/').replace(/.*\//, '');
    };  

  var _setUpListeners = function () {
    $('.add-img').on('click', _showModal); // открыть модальное окно
    $('#fileupload').on('change', _changeFileUpload); // путь к картинке
    $('.popup-form').on('submit', _addProject); // добавляем проект
    

    };
  var _showModal = function (ev) {
    ev.preventDefault();
    alert('hello2');
     console.log('Вызов модального окна');
    
    _bpopup = $('.popup').bPopup({
      speed: 600,
      transition: 'slideDown',
      onClose: function () {
        form.find('.success-message').text('').hide;
        form.find('.error-message').hide();
        form.trigger('reset');
      }
    });
  };

  var _changeFileUpload = function () {
    console.log('Имя файла');
    var input  = $(this),
    name = _getNameFromPath(input.val());
    $('#filename')
      .val(name)
      .trigger('hideTooltip')
      .removeClass('has-error');
  };

  var _addProject = function(ev) {
    console.log('добавление проекта');
    ev.preventDefault();

  var form = $(this),
              url = $(this).attr('action'),
              validAddForm = (!validation.validateForm(form)) ? false : true; // Проверка на валидацию
              defObject = _ajaxForm(form, url, validAddForm);

          if (defObject) {
                
          }
  };

   var _ajaxForm = function (form, url, validAddForm) {

          if (!validAddForm) return false;  
          var data = form.serialize(); 

         
    };

     return {
       init: init
     };

})();



if($('.add-img')) {
  myModule.init();
}
