(function(){

  function onLoad (el, callback) {
    if (typeof callback === 'function') {
      if (el.readyState) { // IE
        el.onreadystatechange = function () {
          if (el.readyState == "loaded" || el.readyState == "complete"){
            el.onreadystatechange = null;
            callback();
          }
        };
      } else { // Others
        el.onload = function(){
          callback();
        };
      }
    }
  }

  function loadScript(url, callback){
    var script = document.createElement("script");
    script.type = "text/javascript";

    onLoad(script, callback);

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  function loadStylesheet(url, callback) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';

    onLoad(link, callback);

    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
  }

  function getHashedFilenames (callback) {
    var files = {};

    var request = new XMLHttpRequest();
    request.open('GET', 'dist/assets.json', true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400){
        data = JSON.parse(request.responseText);
        files.js = data['dist/BYOB.min.js'];
        files.css = data['dist/BYOB.min.css'];
        callback(files);
      } else {

      }
    };

    request.onerror = function() {

    };

    request.send();
  }

  function onBYOBLoad () {
    console.log('boot.js onload');
    Byob.start();
  }

  var allScripts = Array.prototype.slice.call(document.getElementsByTagName('script'))
  var bootScript = allScripts.filter(function(el){
    return el.src.indexOf('dist/boot.js') !== -1;
  })[0];

  getHashedFilenames(function (files) {
    if (!files.js || !files.css) {
      throw new Error('Unable to locate assets');
    }
    loadStylesheet(files.css);
    loadScript(files.js, onBYOBLoad);
  });

})();
