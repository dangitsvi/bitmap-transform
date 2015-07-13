
// These helper functions are exported to the bit-tranform.js where they are used to transform the buffer data.

exports.invertNonPalette = function invertNonPalette(data) {
  var imgStart = data.readUInt32LE(10);
  var fileSize = data.readUInt32LE(2);

  for (var i = imgStart; i < fileSize; i++ ) {
    data.writeUInt8(255 - data.readUInt8(i), i);
  }
  return data;
}

exports.invertPalette = function invertPalette(data) {
  var imgStart = data.readUInt32LE(10);
  var headerEnd = 54;
  var fileSize = data.readUInt32LE(2);

  for (var i = headerEnd; i < imgStart; i++) {
    data.writeUInt8(255 - data.readUInt8(i), i);
  }
  return data;
}
