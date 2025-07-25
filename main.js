const { app, BrowserWindow, screen } = require('electron')

const createWindow = () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize

  const win = new BrowserWindow({
    width,
    height,
    // resizable: false,
    frame: true,
    titleBarStyle: 'hiddenInset',
    icon: 'icon.png',
    webPreferences: {
      contextIsolation: true
    }
  })
  win.setMenu(null) 
  win.loadURL('https://copiloto.udh.edu.pe/titulacion')
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})