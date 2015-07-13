var expect = require('chai').expect;
var invertPalette = require('./transform-functions').invertPalette;
var invertNonPalette = require('./transform-functions').invertNonPalette;
var fs = require('fs');

describe('invert non-palette-bitmap function', function() {

  var sampleBuffer;
  var transformedBuffer;

  beforeEach(function(done) {

    fs.readFile('./lib/non-palette-bitmap.bmp', function(err, data) {
      if(err) {throw err;}
      sampleBuffer = data;
    });

    fs.readFile('./lib/non-palette-bitmap.bmp', function(err, data) {
      if(err) {throw err;}
      transformedBuffer = invertNonPalette(data);
      done();
    });

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

  beforeEach(function(done) {

    fs.readFile('./lib/palette-bitmap.bmp', function(err, data) {
      if(err) {throw err;}
      sampleBuffer = data;
    });

    fs.readFile('./lib/palette-bitmap.bmp', function(err, data) {
      if(err) {throw err;}
      transformedBuffer = invertPalette(data);
      done();
    });
  });

  it('should transform buffer', function() {
    expect(sampleBuffer).to.not.eql(transformedBuffer);
  });
  it('should not change the header', function() {
    expect(sampleBuffer.slice(0,54)).to.eql(transformedBuffer.slice(0,54));
  });
  it('should change palette data, not image data', function() {
    expect(sampleBuffer.slice(1078)).to.eql(transformedBuffer.slice(1078));
  });
});
