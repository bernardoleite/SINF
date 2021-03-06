$(document).ready(function(){

  var id = document.getElementsByClassName("roundGraph")[0].id;
  var arr = id.split("-");
  var url = arr[1];
  if(arr.length >2){
  var title = arr[2];
  var subtitle = arr[3];
}
    var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
        $.ajax({
            /* the route pointing to the post function */
            url: url,
            type: 'POST',
            /* send the csrf-token and the input to the controller */
            data: {_token: CSRF_TOKEN, message:$(".getinfo").val()},
            dataType: 'JSON',
            /* remind that 'data' is the response of the AjaxController */
            success: function (data) {
              var d_a = jQuery.parseJSON (data);

              var chart = new CanvasJS.Chart(id, {
              	theme: "light2",
              	animationEnabled: true,

                title: {
            		text: title
            	},
            	subtitles: [{
            		text: subtitle,
            		fontSize: 16
            	}],

              	data: [{
              		type: "pie",
              		indexLabelFontSize: 15,
              		radius: 100,
              		indexLabel: "{name} - {y}",
              		click: explodePie,
              		dataPoints: d_a
              	}]
              });
              chart.render();

              function explodePie(e) {
              	for(var i = 0; i < e.dataSeries.dataPoints.length; i++) {
              		if(i !== e.dataPointIndex)
              			e.dataSeries.dataPoints[i].exploded = false;
              	}
              }


            }
        });

});
