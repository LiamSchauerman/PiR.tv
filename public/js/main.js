
$(document).ready(function(){
	$(".logo").html($("#rpi-svg").html());
	$.get("http://localhost:8080/files", function(data){
		$("#files").find('ul').html('')
		for( var i=0; i<data.length; i++){
			if( data[i][0] !== '.'){
				li = "<li class='file'>"+data[i]+"</li>"
				$("#files").find('ul').append(li)
			}
		}
		$('.file').click(function(){
			$.each($('.file'), function(i, elem){
				console.log($(elem))
				if($(elem).hasClass('active')){
					$(elem).removeClass('active')
				}
			})
			$(this).addClass('active');
			// update selected div
			var temp = "Click to play " + $('.active').html()
			$("#selected").hide().html(temp).fadeIn();
		})
	})
});
// var Loader = {
//   loader: $('#loader'),
//   show: function() {
// 	this.loader.siblings('div').hide();
// 	this.loader.show();
//   },
//   hide: function() {
// 	  this.loader.siblings('div').show();
// 	this.loader.hide();
//   }
// };
