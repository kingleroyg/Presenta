//https://gist.github.com/bwin/5ed15cc0620a6a63f081
//http://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/
const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
//
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;
var previewWindow = null;
// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform != 'darwin') {
        app.quit();
    }
});
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1800,
        height: 725,
         center:true,
        title: "PresentA - Pre-Alpha"
    });
    // and load the index.html of the app.
    mainWindow.loadURL('file://' + __dirname + '/index1.html');
    mainWindow.show();
    //mainWindow.openDevTools();
    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });





    //Recieving message to window
    const ipcMain = require('electron').ipcMain;
    ipcMain.on('asynchronous-message', function(event, arg) {
        if(previewWindow != null){
            previewWindow.webContents.send('info', {
                msg: arg
            });
            console.log(arg); // prints "ping"
            event.sender.send('asynchronous-reply', 'pong'); 
        }else{
                previewWindow = new BrowserWindow({
                title: 'Presentation window',
                "width": 400,
                "height": 600
                });
                previewWindow.loadURL('file://' + __dirname + '/index2.html');
                previewWindow.show();
        }

    });
    //-------------------------------------Open second window
 
        previewWindow = new BrowserWindow({
            title: 'Presentation window',
            "width": 400,
            "height": 600
        });
        previewWindow.loadURL('file://' + __dirname + '/index2.html');
        previewWindow.show();

    // Emitted when the window is closed.
    previewWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        previewWindow = null;
    });


 
   



});