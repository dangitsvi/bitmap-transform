var invertPalette = require('./transform-functions').invertPalette;
var invertNonPalette = require('./transform-functions').invertNonPalette;
var fs = require('fs');

var nonPaletteBM = './lib/non-palette-bitmap.bmp';
var paletteBM = './lib/palette-bitmap.bmp';

//called the transform function twice to invert both types of bitmaps
transform(nonPaletteBM, invertNonPalette, 'newnonpalette2.bmp');
transform(paletteBM, invertPalette, 'newpalette2.bmp');

//takes in a file path, a helper function, and a new file name. It reads the file, transforms it using the helper function, then writes it back out.
function transform(filePath, transformFunction, newFileName) {
  fs.readFile(filePath, function(err, data) {
    if(err){ throw err };
    fs.writeFile(newFileName, transformFunction(data));
  });
}




