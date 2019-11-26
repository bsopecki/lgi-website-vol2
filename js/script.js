var trigger = document.getElementById('button');

trigger.addEventListener('click', function() {
  var elem =  document.getElementById('popup');
  elem.style.display = "none"
});

var element = document.querySelector('.carousel');
 var flkty = new Flickity(element, {
     cellAlign: 'center',
     contain: true,
     pageDots: true,
     hash: true,
     draggable: true,
     prevNextButtons: true
 });