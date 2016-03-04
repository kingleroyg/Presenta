// Mixing jQuery and Node.js code in the same file? Yes please!
$(document).ready(function() {
       

    const ipcMain = require('electron').ipcMain;
    var os = require('os');
    var shell = require('shell');


    $('.updateviews').on('click', function(e) {
        e.preventDefault();
        const ipcRenderer = require('electron').ipcRenderer;

        console.log("Sending message");
        //Displaying messagebox
        $('.liveContainer_view').html($('.previewContainer_view div').html());
        $(function() {
            $('.liveContainer_view #previewContent_live').css('font-size', '1em');
            while( $('.liveContainer_view #previewContent_live').height() > $('.liveContainer_view').height() ) {
                $('.liveContainer_view #previewContent_live').css('font-size', (parseInt($('.liveContainer_view #previewContent_live').css('font-size')) - 1) + "px" );
            }
        });

       ipcRenderer.send('asynchronous-message', $('.previewContainer_view div').html());
    });



    $('.sendmessage').on('click', function(e) {
        e.preventDefault();
        // Open URL with default browser.
        console.log("Sending message");
        const ipcRenderer = require('electron').ipcRenderer;
        //console.log(ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"
        ipcRenderer.on('asynchronous-reply', function(event,
            arg) {
            console.log(arg); // prints "pong"
        });
        ipcRenderer.send('asynchronous-message', 'ping');
    });
});