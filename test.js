var expect = require('chai').expect;
var fs = require('fs');

var oldBuf = fs.readFileSync('./lib/non-palette-bitmap.bmp');
var newBuf = fs.readFileSync('./newpalette.bmp');

var imgStart = oldBuf.readUInt32LE(10);
var fileSize = oldBuf.readUInt32LE(2);

describe('non-palette bitmap file', function() {
  it('image should start after 54 bytes', function() {
    expect(oldBuf.readUInt32LE(10)).to.eql(54);
  });
});

describe('nonpalette-bitmap-transform.js', function() {
  it('should change the buffers values', function() {
    expect(oldBuf).to.not.eql(newBuf);
  });
  it('should have inverted value at beginning', function() {
    expect(newBuf.readUInt8(imgStart)).to.eql(255 - oldBuf.readUInt8(imgStart));
  });
  it('should have inverted value at middle', function() {
    expect(newBuf.readUInt8(Math.floor(fileSize/2))).to.eql(255 - oldBuf.readUInt8(Math.floor(fileSize/2)));
  });
  it('should have inverted value at end', function() {
    expect(newBuf.readUInt8(fileSize-1)).to.eql(255 - oldBuf.readUInt8(fileSize-1));
  });
});

