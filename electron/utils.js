const {ipcMain} = require('electron');
const fs = require('fs');
const path = require('path');

function registerListeners(){
    ipcMain.on('request-folder-contents', (event, arg) => {
        if(arg=='auto')
            arg = path.resolve(__dirname, '..');
        let contents_names = fs.readdirSync(arg);
        let contents = contents_names.map(x=>{
            var file = path.resolve(arg, x);
            var type = fs.lstatSync(file).isDirectory() ? 'folder': 'file';
            return {name: x, file_path: file, type: type};
        });
        event.returnValue = contents;
    })
}

module.exports = {registerListeners};