//-------single state object----------

var state = {
	items : []
}

var index = -1;
//----functions that MODIFY state-------

function addItem(state, item){
	state.items.push(item);
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
	index++;
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

//----EVENT LISTENERS---------------

function checkItem(state){
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
		addItem(state,$('#shopping-list-entry').val());
		displayItem(state, $('ul.shopping-list'));
		this.reset();
		deleteItem();
		checkItem();
	})
}

$(document).ready(function(){
	submitItem();
});


















