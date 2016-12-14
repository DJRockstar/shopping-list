//-------single state object----------

var state = {
	items : []
}

//----functions that MODIFY state-------

function addItem(state, item){
  if(item !== ''){
  	state.items.push(item);
  }
  else {
  	alert('Woops! Looks like you are entering spaces for your shopping list :P');
  }
}

//-----functions that RENDER state------

function displayItem(state,element){
	var itemHTML = state.items.map(function(item){
	 return `<li>\
			  <span class='shopping-item'>${item}</span>\
			  <div class='shopping-item-controls'>\
				<button class='shopping-item-toggle'>\
					<span class='button-label'>check</span></button>\
	  			<button class='shopping-item-delete'>\
	    			<span class='button-label'>delete</span></button>\
			   </div>\
			</li>`
	});
	element.html(itemHTML);
}

function removeItem(state,item){
	var checkIndex = state.items.indexOf(item);
	if(checkIndex !== -1){
		state.items.splice(checkIndex,1);
		displayItem(state, $('ul.shopping-list'));
		deleteItem();
		checkItem();
	}	
}

// function checkedItems(){
// 	if($('li').find('.shopping-item').hasClass('shopping-item__checked')!==true){
// 		console.log('im here');
// 		checkItem();
// 		console.log($('li').find('.shopping-item').hasClass('shopping-item__checked'));
// 		displayItem(state, $('ul.shopping-list'));
// 	}
// 	else {
// 		$('li').find('.shopping-item').toggleClass('shopping-item__checked');
// 	}
// }


//----EVENT LISTENERS---------------

function checkItem(){
	$('button.shopping-item-toggle').on('click',function(){
		$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
	})
}

function deleteItem(){
	$('button.shopping-item-delete').on('click', function(){
		var item = $(this).closest('li').find('.shopping-item').text();
		console.log(item);
		removeItem(state,item);
	})
}

function submitItem(){
	$("form").on('submit', function(event){
		event.preventDefault();
		addItem(state,$('#shopping-list-entry').val().replace(/\s/g, ''));
		displayItem(state, $('ul.shopping-list'));
		this.reset();
		deleteItem();
		checkItem();
	})
}

$(document).ready(function(){
	submitItem();
});


















