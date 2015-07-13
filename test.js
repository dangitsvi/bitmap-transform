var expect = require('chai').expect;
var invertPalette = require('./transform-functions').invertPalette;
var invertNonPalette = require('./transform-functions').invertNonPalette;
var fs = require('fs');

describe('invert non-palette-bitmap function', function() {

  var sampleBuffer;
  var transformedBuffer;

  before(function() {
    sampleBuffer = fs.readFileSync('./lib/non-palette-bitmap.bmp');
    transformedBuffer = invertNonPalette(fs.readFileSync('./lib/non-palette-bitmap.bmp'));
  });

  it('should transform buffer', function() {
    expect(sampleBuffer).to.not.eql(transformedBuffer);
  });
  it('should not change the header', function() {
    expect(sampleBuffer.slice(0,54)).to.eql(transformedBuffer.slice(0,54));
  });
});

describe('invert palette-bitmap function', function() {

  var sampleBuffer;
  var transformedBuffer;

  before(function() {
    sampleBuffer = fs.readFileSync('./lib/palette-bitmap.bmp');
    transformedBuffer = invertNonPalette(fs.readFileSync('./lib/palette-bitmap.bmp'));
  });

  it('should transform buffer', function() {
    expect(sampleBuffer).to.not.eql(transformedBuffer);
  });
  it('should not change the header', function() {
    expect(sampleBuffer.slice(0,54)).to.eql(transformedBuffer.slice(0,54));
  });
});
