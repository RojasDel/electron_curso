// importamos dos elementos del programa electron
const {app, BrowserWindow} = require('electron');
const path = require('path');

function crearVentanaPrincipal() {
    let ventanaPrincipal = new BrowserWindow({
        width: 800,
        height: 600, 
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
 // Creamos una ventana del navegador e indicamos cual archivo debe cargarse
    ventanaPrincipal.loadFile('index.html');
}

// Una vez electron este listo para operar crearemos la ventana ppal

app.whenReady().then(crearVentanaPrincipal);

// Agregando compatibilidad con otras plataformas operacionales con este framework
app.on('window-all-closed', function() {
    if (process.platform === 'darwin') {
        app.quit();
    }
});

app.on('activate', function() {
    if (BrowserWindow.getAllWindows().length === 0) {
        crearVentanaPrincipal();
    }
});