$(document).ready(function() {









	//Update preview scree
    $('.display_item').on('change', function() {
        // or $(this).val()
        $('.previewContainer_view #previewContent').html(this.value);

		$(function() {
		    $('.previewContainer_view #previewContent').css('font-size', '1em');
		    while( $('.previewContainer_view #previewContent').height() > $('.previewContainer_view').height() ) {
		        $('.previewContainer_view #previewContent').css('font-size', (parseInt($('.previewContainer_view #previewContent ').css('font-size')) - 1) + "px" );
		    }
		    
		});

    });


  






	//Upload file for list
	$('.file-upload-button').on('change', function(event) {
			console.info("Processing upload");
			        var reader = new FileReader();
			        reader.onload = onReaderLoad;
			        reader.readAsText(event.target.files[0]);
			 

			    function onReaderLoad(event){
			        //console.log(event.target.result);
			        var obj = JSON.parse(event.target.result);
			        console.log(obj.data);
			 		select_data(obj.data);
			    }
			    
			    function select_data($data){
			    	console.info("displaying data");
			        //alert('Name : ' + name + ', Family : ' + family);
			        $.each($data, function(index, value){
			        	$('.display_item')
					        .append($("<option></option>")
					        .attr("value",value.content)
					        .text(value.title));

			        });

			    }

	});



});