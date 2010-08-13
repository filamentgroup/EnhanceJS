testWithIframe('iframe test helper', function(win, doc, enhance) {
    start();
    expect(3);
    ok(win, 'win reference');
    ok(doc, 'doc reference');
    ok(enhance, 'enhance reference');
});

testWithIframe('pass and basics (cookies required for full test)', function(win, doc, enhance) {
    expect(9);
    
    enhance.defaultTests = {
        fail: function() {
            ok(false, 'default test was not supposed to run');
            return false;
        }
    };
    
    var settings = {
        testName: 'unitTest1',
        tests: {
            pass: function() {
                ok(true, 'successfully overwrote default tests');
                return true;
            }
        },
        addTests: {
            success: function() {
                ok(true, 'successfully called test from addTests setting');
                return true;
            }
        },
        loadStyles: ['../data/pass.css'],
        loadScripts: ['../data/pass.js'],
        onPass: function() {
            start();
            ok(enhance.cookiesSupported, 'Cookies are available');
            var pass = readCookie(settings.testName);
            equals(readCookie(enhance.defaultSettings.testName), null, 'default testName was not used');
            ok(pass != null, 'testName setting properly used');
            equals(pass, 'pass', 'onPass successfully called after passing tests');
            ok(true, 'onPass successfully called');
        },
        onScriptsLoaded: function(){
        	ok(win.passJSLoaded, 'onScriptsLoaded was called after scripts finished loading');
        	//css should be loaded at this point too, so we can try testing it
        	var testDivA = doc.body.appendChild(doc.createElement('div'));
    		testDivA.id = 'testDivA';
   			 ok(testDivA.offsetWidth == 10, 'CSS files were successfully loaded');
        }
    };
    
    
    
    eraseCookie(settings.testName);
    eraseCookie(enhance.defaultSettings.testName);
    
    enhance(settings);
});

