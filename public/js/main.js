
$(document).ready(function(){
	$(".logo").html($("#rpi-svg").html());
	$("#getFiles").click(function(){
		$.get("http://localhost:8080/files", function(data){
			console.log("working");
			console.log(data);
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
