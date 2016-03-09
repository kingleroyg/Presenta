$(document).ready(function() {


 

	//Update preview scree
    $('.display_item').on('change', function() {
        // or $(this).val()
        
        updatePreview_view(this.value);


    });


  //Format and display screen
  function updatePreview_view(item){
		var $text = "";
		var $arr = [];

		//THis could be a bug in the future
		//http://stackoverflow.com/questions/35791919/get-the-text-between-two-custom-tags-from-a-string-using-regex
		//Splitting text
		 $text = item ;
		 $arr = $($text).filter('verse').map(function() {
			return $(this).text();
		}).get();


	$('.previewContainer_view #previewContent').html($arr[0]);
	$('.preview_data').attr("item", item);
	$('.preview_data').attr("index", 0);
	$('.preview_data').attr("section", "verse");
 
		$(function() {
		    $('.previewContainer_view #previewContent').css('font-size', '1em');
		    while( $('.previewContainer_view #previewContent').height() > $('.previewContainer_view').height() ) {
		        $('.previewContainer_view #previewContent').css('font-size', (parseInt($('.previewContainer_view #previewContent ').css('font-size')) - 1) + "px" );
		    }
		    
		});
  }//ENDFunction

  $('.Next_liveController').on('click', function(e){
  		e.preventDefault();
		var $text = "";
		var $verse = [];
		var $chorus = [];

		currentIndex = $('.preview_data').attr("index");
		$text = $('.preview_data').attr("item");
		$verse = $($text).filter('verse').map(function() { return $(this).text(); }).get();
		$chorus = $($text).filter('chorus').map(function() { return $(this).text(); }).get();
 
  		  
  			if($('.preview_data').attr("section") == "chorus"){
  				//do verse
		  			current_int = parseInt(currentIndex +1);
		  			if($verse[current_int] != null){//end of song
				  			$('.previewContainer_view #previewContent').html($verse[current_int]);
				  			console.log("assigning index: " +  $verse[current_int]	)
				  			$('.preview_data').attr("index", $verse[current_int]);
				  			$('.preview_data').attr("section", "verse");
		  			}

  			}else{
  				//do chorus
  				console.log("Its a chorus");
  				$('.previewContainer_view #previewContent').html($chorus[0]);
  				$('.preview_data').attr("section", "chorus");
  			}
  });



  $('.Back_liveController').on('click', function(e){
  		e.preventDefault();
		var $text = "";
		var $verse = [];
		var $chorus = [];

		currentIndex = $('.preview_data').attr("index");
		$text = $('.preview_data').attr("item");
		$verse = $($text).filter('verse').map(function() { return $(this).text(); }).get();
		$chorus = $($text).filter('chorus').map(function() { return $(this).text(); }).get();
 

 			console.log("Getting the current selection: "+ $('.preview_data').attr("section"));
 			console.log("Getting the current index: "+ parseInt(currentIndex - 1));
  		  
  			if($('.preview_data').attr("section") == "chorus"){
  				//do verse
		  			current_int = parseInt(currentIndex - 1);
		  			if($verse[current_int] != null){//end of song
				  			$('.previewContainer_view #previewContent').html($verse[current_int]);
				  			console.log("assigning index: " +  $verse[current_int]	)
				  			$('.preview_data').attr("index", $verse[current_int]);
				  			$('.preview_data').attr("section", "verse");
		  			}

  			}else{
  				//do chorus
  				console.log("what if: " + $('.preview_data').attr("index"));
  				if($('.preview_data').attr("index") == 0){
			  			$('.previewContainer_view #previewContent').html($verse[0]);
				  			console.log("assigning index: " +  $verse[0]	);
				  			$('.preview_data').attr("index", $verse[0]);
				  			$('.preview_data').attr("section", "verse");
  				}else{
		  				console.log("Its a chorus");
		  				$('.previewContainer_view #previewContent').html($chorus[0]);
		  				$('.preview_data').attr("section", "chorus");
  				}

  			}
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