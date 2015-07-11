function invertColors() {

  var fs = require('fs');

  fs.readFile('./lib/non-palette-bitmap.bmp', function(err, data) {
    var imgStart = data.readUInt32LE(10);
    var fileSize = data.readUInt32LE(2);

    for (var i = imgStart; i < fileSize; i++ ) {
      data.writeUInt8(255 - data.readUInt8(i), i);
    }

    fs.writeFile('newpalette.bmp', data);
  });
}

module.exports = invertColors();
