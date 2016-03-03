// Mixing jQuery and Node.js code in the same file? Yes please!
$(document).ready(function() {
    const ipcMain = require('electron').ipcMain;
    var os = require('os');
    var shell = require('shell');
    $('.display_item').on('change', function() {
        // or $(this).val()
        $('.previewContainer_view').html(this.value);
    });
    $('.updateview').on('click', function(e) {
        e.preventDefault();
        const ipcRenderer = require('electron').ipcRenderer;
        console.log("Sending message");
        $('.liveContainer_view').html($(
            '.previewContainer_view').html());
        ipcRenderer.send('asynchronous-message', $(
            '.liveContainer_view').html());
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