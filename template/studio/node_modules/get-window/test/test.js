
var assert = require('assert');
var getWindow = require('../');
var getDocument = require('get-document');

var inBrowser = typeof window !== 'undefined';

// Zuul is configured to pass on to Browserify a configuration to exclude the
// following module, 'jsdom' because it is only for testing in node. Browsers
// have real dom
var jsdom = !inBrowser ? require('jsdom') : null;

var doc = inBrowser ? document : jsdom.jsdom();
var win = inBrowser ? window : doc.parentWindow;

describe('get-window', function () {

  it('should work with the global Window object', function () {
    var result = getWindow(win);
    assert(result === win);
  });

  it('should work with the global Document object', function () {
    var result = getWindow(doc);
    assert(result === win);
  });

  it('should work with the `document.body` object', function () {
    var result = getWindow(doc.body);
    assert(result === win);
  });

  it('should work with the a DOM element inside `document.body`', function () {
    var p = doc.createElement('p')
    doc.body.appendChild(p);
    var result = getWindow(doc.body.firstChild);
    assert(result === win);
    doc.body.removeChild(p);
  });

  it('should work with a new DOM element', function () {
    var result = getWindow(doc.createElement('div'));
    assert(result === win);
  });

  it('should work with a new TextNode', function () {
    var result = getWindow(doc.createTextNode(''));
    assert(result === win);
  });

  // skip on IE <= 8
  if ('function' === typeof doc.createRange) {
    it('should work with a DOM Range instance', function () {
      var result = getWindow(doc.createRange());
      assert(result === win);
    });
  }

  // skip on IE <= 8
  if ('function' === typeof win.getSelection) {
    it('should work with a DOM Selection instance', function () {
      // NOTE: a Selection needs to have some kind of selection on it
      // (i.e. not `type: "None"`) in order for a Document to be found
      var range = doc.createRange();
      var t = doc.createTextNode('t');
      doc.body.appendChild(t);
      range.setStart(t, 0);
      range.setEnd(t, t.nodeValue.length);

      var sel = win.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      assert.equal(1, sel.rangeCount);

      var result = getWindow(sel);
      assert(result === win);

      // clean up
      sel.removeAllRanges();
      doc.body.removeChild(t)
    });
  }

  it('should work with the child node of an IFRAME element', function () {
    var iframe = doc.createElement('iframe');
    doc.body.appendChild(iframe);

    // `contentWindow` should be used for best browser compatibility
    var iframeDoc = getDocument(iframe.contentWindow);
    assert.equal(9, iframeDoc.nodeType);

    iframeDoc.open();
    iframeDoc.write('<body><b>hello world</b></body>');
    iframeDoc.close();

    var result = getWindow(iframeDoc);
    assert(result);
    assert(result !== win);

    // test the <body>
    var body = iframeDoc.body;
    assert(result === getWindow(body));

    // test the <b> node
    assert(result === getWindow(body.firstChild));

    // clean up
    doc.body.removeChild(iframe);
  });

});
