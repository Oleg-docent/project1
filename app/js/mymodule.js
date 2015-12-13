var myModule = (function () {

  var init = function () {
    _setUpListeners();
    // то, что должно произойти сразу
  };

  var _setUpListeners = function () {
    $('.add-img').on('click', _showModal); // открыть модальное окно
  };

  var _showModal = function (ev) {
    ev.preventDefault();
    alert('hello2');
     console.log('Вызов модального окна');
    $('.popup').bPopup();
  };

     return {
       init: init
     };

})();



if($('.add-img')) {
  myModule.init();
}
