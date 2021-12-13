const electron = require('electron')
const { app, BrowserWindow } = electron

const fs =  require('fs')

function createWindow(){
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + '/kakaotalk_icon_194149.ico',
    })
    mainWindow.loadFile('index.html')
}

app.on('ready', () => {
    console.log('Running...')
})

app.whenReady().then(()=>{
    createWindow()
})

app.on('window-all-closed', function(){
    if(process.platform != 'darwin') app.quit()
})
/*
const name = document.getElementById("name_input").value;
const pword = document.getElementById("pword_input").value;

fs.readFileSync('./form.json', (res) => {
    data = res.json()
})

data.name = name ;
data.pword = pword ;

fs.writeFileSync('./form.json', data, function(err){
    if(err) throw(err)
})
*/