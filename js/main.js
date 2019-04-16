var item = document.getElementsByClassName('item__wrap');

// Open-close spoiler with answer
for (var i = 0; i < item.length; i++) {
	item[i].addEventListener('click', function() {
	  this.classList.toggle('item--active');

	  var panel = this.nextElementSibling;
	  var arrow = this.lastElementChild;
	  
	  if (panel.style.maxHeight) {
		panel.style.maxHeight = null; // close answer
		panel.classList.remove('item__text--open'); // close answer
		arrow.classList.remove('item__sign--rotate'); // normal position for arrow 

	  } else {
		panel.style.maxHeight = panel.scrollHeight + "px"; // open answer
		panel.classList.add('item__text--open'); // open answer
		arrow.classList.add('item__sign--rotate'); // rotate 180deg for arrow
	  } 
	});
  }