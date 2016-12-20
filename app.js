//-------single state object----------

var state = { items : [] };

var list = $(".shopping-list");

//----functions that MODIFY state-------

function addItem(newItem){
  if (state.items.indexOf(newItem) < 0) {
  	state.items.push(newItem);
    displayItem(state.items[state.items.length-1]);
  } else {
    alert("You already have this item!")
  };
};

//-----functions that RENDER state------

function displayItem(item){
  return list.append(
    `<li>\
      <span class='shopping-item'>${item}</span>\
      <div class='shopping-item-controls'>\
        <button class='shopping-item-toggle'>check</button>\
        <button class='shopping-item-delete'>delete</button>\
      </div>\
    </li>`);
};

function removeItem(item){
	var checkIndex = state.items.indexOf(item);
	if(checkIndex !== -1){
		state.items.splice(checkIndex,1);
    list.children()[checkIndex].remove();
	};
};

$(document).ready(function(){
  $('body').on('click', '.shopping-item-toggle', function(event){
  	$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

  $('body').on('click', '.shopping-item-delete', function(){
    var item = $(this).closest('li').find('.shopping-item').text();
    removeItem(item);
  });

  $("form").on('submit', function(event){
  	event.preventDefault();
  	addItem($('#shopping-list-entry').val());
  	this.reset();
  });
});
