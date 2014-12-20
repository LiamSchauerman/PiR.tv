
$(document).ready(function(){
	$(".logo").html($("#rpi-svg").html());
	$("#getFiles").click(function(){
		$.get("http://localhost:8080/files", function(data){
			$("#files").find('ul').html('')
			for( var i=0; i<data.length; i++){
				li = "<li class='file'>"+data[i]+"</li>"
				$("#files").find('ul').append(li)
			}
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
