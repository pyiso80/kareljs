console.log('Hello from Electron 👋')

const { app, BrowserWindow } = require('electron/main')

const {move, showError} = require('./karel/karel')

//move()
//console.log(showError())

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { 
        contextIsolation: false,
        nodeIntegration: true
       },
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})