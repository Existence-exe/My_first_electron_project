const electron = require('electron')
const { app, BrowserWindow } = electron
const { spawn } = require('child_process')
const path = require('path')
const fs = require('fs')

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + '/kakaotalk_icon_194149.ico'
    })
    mainWindow.loadFile('index.html')
}

app.on('ready', () => {
    console.log('Running...')
    const url = path.join(__dirname, '/backEnd/main.py')
    const server = spawn('python', [url])

    server.stdout.on('data', data => {
        console.log('' + data)
    })
    server.stderr.on('data', data => {
        console.log('' + data)
    })
    server.on('error', data => {
        console.log('' + data)
    })
    server.on('exit', (code, signal) => {
        console.log('process exited :D')
        if (code) {
            console.log('' + code)
        }
        if (signal) {
            console.log('' + signal)
        }
    })
})

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') app.quit()
})