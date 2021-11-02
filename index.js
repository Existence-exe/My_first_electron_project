const electron = require('electron')
const { app, BrowserWindow } = electron

app.on('ready', () => {
    console.log('Running...')

    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + '/kakaotalk_icon_194149.ico',
    })
    mainWindow.loadURL(`file://${__dirname}/index.html`)
})