//Check Off Specific Todos By Clicking
$("div.list").on("click", "div.content", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("div.list").on("click", "div.trash", function(event){
		$(this).parent().fadeOut(400, function(){
			$(this).remove();
		});
	event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("div.list").append("<div class='trashandcontent'><div class='trash'><i class='far fa-trash-alt'></i></div><div class='content'>" + todoText + "</div></div>");
	}
});

$(".fa-sticky-note").click(function(){
	$("input[type='text']").fadeToggle();
});
