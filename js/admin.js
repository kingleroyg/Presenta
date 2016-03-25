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
		 $arr = $($text).filter('verse').map(function() { return $(this).text(); }).get();

      
	    $('.previewContainer_view #previewContent').html($arr[0]); //song
	    $('.preview_data').attr("song", item); // song
	    $('.preview_data').attr("item", $arr[0]); // item
	    $('.preview_data').attr("section", "verse"); //Section
	    $('.preview_data').attr("index", 0); //index
 
		$(function() {
		    $('.previewContainer_view #previewContent').css('font-size', '1em');
		    while( $('.previewContainer_view #previewContent').height() > $('.previewContainer_view').height() ) {
		        $('.previewContainer_view #previewContent').css('font-size', (parseInt($('.previewContainer_view #previewContent ').css('font-size')) - 1) + "px" );
		    }
		    
		});


        
      ///Updateing Pagination Controller
 
              // <li><a href="javascript:void(0)">»</a></li>
              //<li><a href="javascript:void(0)">chorus</a></li>
		var chorusIndex = $arr.length / 2;// gettting center

		jQuery.each($arr, function (index, item) {
		    
		    if (index == chorusIndex) {//Chorus
		        $(".paginationView").append('<li class="pagination_item" index="0"  section="chorus"><a  href="javascript:void(0)">CHORUS</a></li>');
		    } else if (index == 0) {//first value
		        $(".paginationView").append('<li class="pagination_item" index=' + index + '  section="verse"  ><a class="active" href="javascript:void(0)">' + (index + 1) + '</a></li>');
		    } else {// displaying rest of the items
		        $(".paginationView").append('<li class="pagination_item" index=' + index + ' section="verse"  ><a  href="javascript:void(0)">' + (index + 1) + '</a></li>');
		    }
		});
      

		$('.pagination_item').on('click', function (e) {
		    e.preventDefault();
 
		    $currentButtonIndex = $(this).attr("index");  

		    $currentIndex = $('.preview_data').attr("index");
		    $currentSong = $('.preview_data').attr("song");
		    $currentSection = $('.preview_data').attr("section");
		    $currentItem = $('.preview_data').attr("item");

		    $verse = $($currentSong).filter('verse').map(function () { return $(this).text(); }).get();   //Gets only vurses
		    $chorus = $($currentSong).filter('chorus').map(function () { return $(this).text(); }).get(); // Gets only chous 

		    if ($(this).attr("section") == "verse") {

		        $('.previewContainer_view #previewContent').html($verse[$currentButtonIndex]); //song
		        $('.preview_data').attr("song", $currentSong); // song
		        $('.preview_data').attr("item", $verse[$currentButtonIndex]); // item
		        $('.preview_data').attr("section", "verse"); //Section
		        $('.preview_data').attr("index", $currentButtonIndex); //index

		    } else {

		        $('.previewContainer_view #previewContent').html($chorus[$currentButtonIndex]); //song
		        $('.preview_data').attr("item", $chorus[$currentButtonIndex]); // item
		        $('.preview_data').attr("section", "chorus"); //Section

		    }




		});



  }//ENDFunction






  $('.Next_liveController').on('click', function (e) {
      /*
      Rules: 
        A hymnal will always end with a chorus
        There can only be one chorus in a song
      */
  		e.preventDefault();
		var $text = "";
		var $verse = [];
		var $chorus = [];
		var $currentIndex = "";

		$currentIndex = $('.preview_data').attr("index");
		$currentSong = $('.preview_data').attr("song");
		$currentSection = $('.preview_data').attr("section");
		$currentItem = $('.preview_data').attr("item");

		$verse = $($currentSong).filter('verse').map(function () { return $(this).text(); }).get();   //Gets only vurses
		$chorus = $($currentSong).filter('chorus').map(function () { return $(this).text(); }).get(); // Gets only chous 
      //<div hidden class="preview_data" song="cdscd" item="sfjiosdfj" section="chorus" index="1"></div> 

		if ($currentSection == "chorus") {
                
		    current_int = parseInt($currentIndex) + 1;
		    console.log("Current NEXT  : " + $verse[current_int]);

		    console.log("Current Current_int  : " + current_int);
  			    if ($verse[current_int] != null) {//end of song 

				  			$('.previewContainer_view #previewContent').html($verse[current_int]); 
				  			$('.preview_data').attr("index", current_int);
				  			$('.preview_data').attr("song", $currentSong);
				  			$('.preview_data').attr("section", "verse");
				  			$('.preview_data').attr("item", $verse[current_int]);
		  			}

  			}else{
  				$('.previewContainer_view #previewContent').html($chorus[0]);
  				$('.preview_data').attr("section", "chorus");
  				$('.preview_data').attr("item", $chorus[0]);
  			}
  });



  $('.Back_liveController').on('click', function (e) {
      /*
      Rules: 
        A hymnal will always end with a chorus
        There can only be one chorus in a song
      */

      e.preventDefault();
      var $text = "";
      var $verses = [];
      var $chorus = [];
      var current_int = "";

      $currentIndex = $('.preview_data').attr("index");
      $currentSong = $('.preview_data').attr("song");
      $currentSection = $('.preview_data').attr("section");
      $currentItem = $('.preview_data').attr("item");

      $verses = $($currentSong).filter('verse').map(function () { return $(this).text(); }).get();   //Gets only vurses
      $chorus = $($currentSong).filter('chorus').map(function () { return $(this).text(); }).get(); // Gets only chous 
      //<div hidden class="preview_data" song="cdscd" item="sfjiosdfj" section="chorus" index="1"></div> 


      if ($currentSection == "chorus") {
          //GO back to Verse if there is

          current_int = parseInt($currentIndex) - 1;

          if ($verses[current_int] == $verses.length || $verses[current_int] == null) {//end of song is the start : index: 0
              $('.previewContainer_view #previewContent').html($verses[0]);
              $('.preview_data').attr("index", 0);
              $('.preview_data').attr("song", $currentSong);
              $('.preview_data').attr("section", "verse");
              $('.preview_data').attr("item", $verses[0]);
          } else {

              //Going back to song
                 current_int = parseInt($currentIndex) - 1;

                  console.log("coming back from chorus");
                  $('.previewContainer_view #previewContent').html($verses[current_int]);
                  $('.preview_data').attr("index", current_int);
                  $('.preview_data').attr("song", $currentSong);
                  $('.preview_data').attr("section", "verse");
                  $('.preview_data').attr("item", $verses[current_int]);
          }


      } else {
          // If song do chorus before but keep the index
          current_int = parseInt($currentIndex) - 1;

          console.log("coming back from song");
          console.log("current_int : " + current_int);
          console.log("current verse : + " + $verses[current_int]);

          if ($currentSection == "verse") {

              $('.previewContainer_view #previewContent').html($chorus[0]);
              $('.preview_data').attr("section", "chorus");
              $('.preview_data').attr("item", $chorus[0]);


          } else {

              $('.previewContainer_view #previewContent').html($verses[current_int]);
              $('.preview_data').attr("index", current_int);
              $('.preview_data').attr("song", $currentSong);
              $('.preview_data').attr("section", "verse");
              $('.preview_data').attr("item", $verses[current_int]);

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
					        .attr("value",value.data)
					        .text(value.hymn_num + " : " +value.title));

			        });

			    }

	});



});