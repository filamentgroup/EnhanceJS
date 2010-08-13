function testWithIframe(name, fn) {
    test(name, function() {
        var self = this;
        stop();
        loadIframe(function(win, doc, enhance) {
            // start();
            fn.call(self, win, doc, enhance);
        }, self);
    });
};

function loadIframe(cb, context) {
    window.iframeLoaded = function(win, doc, enhance) {
        cb && cb.call(context, win, doc, enhance);
    };
    var iframe = document.getElementById('iframe').contentWindow;
    iframe.location.href = iframe.location.href;
}


/*cookie functions from quirksmode.org*/
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}