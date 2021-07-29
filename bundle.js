(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (process){(function (){
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

const START_DAY = 214
const END_DAY = START_DAY + 33

const TEXTS = [
  "Te vas te vasss, pásalo excelente feita. Cuando estábamos viendo las maletas pensaba mmmm chiguals quepo en esa ahhhh. Sorry por hacerte subir de nuevo las escaleras para sacar la foto por dentro, pero habría sido raro y sospechoso que te pida esta foto así no más juju. Suerte en tu viaje, y una vez más: te quiero!",
  "Malito este año nuevo. A la izquierda un Caco fresco. A la derecha no sé, no me acuerdo jajajaj, solo sé que estabamos cuidando a un wn que estaba dando la cacha y que estaba lloviznando (o ssshhhhispeando 🌊). No todos los días van a ser fotos mías, pero just in case ya me olvidaste, aquí ya me recuerdas de nuevo. Te quiero fea, sigue disfrutandinggggggg",

]

window.onload = async function() {
  
  process.nextTick(function(){((err, files) => {
    const todayImagesNames = files.filter((value) => value.startsWith(`img_${day - START_DAY}_`));
    if (todayImagesNames.length === 0) return;

    document.getElementById('first-image').src = "img/" + todayImagesNames[0];
    if (todayImagesNames.length === 2) {
      document.getElementById('second-image').src = "img/" + todayImagesNames[1];
      document.getElementById('second-image-div').className = "w-1/2 px-1";
    }

    document.getElementById('counter').textContent = `Día ${day - START_DAY}/34`;
    document.getElementById('caption').textContent = TEXTS[day - START_DAY];
  })(null,["img_0_1.jpeg","img_10_1.jpeg","img_11_1.jpeg","img_11_2.jpeg","img_12_1.jpeg","img_13_1.jpeg","img_13_2.jpeg","img_14_1.jpeg","img_15_1.jpeg","img_16_1.jpeg","img_17_1.jpeg","img_18_1.png","img_19_1.jpeg","img_19_2.jpeg","img_1_1.jpeg","img_1_2.jpeg","img_20_1.png","img_21_1.png","img_22_1.png","img_23_1.png","img_24_1.jpg","img_25_1.jpg","img_26_1.jpg","img_27_1.jpg","img_28_1.jpg","img_29_1.jpg","img_2_1.jpeg","img_30_1.jpg","img_31_1.jpg","img_32_1.jpg","img_33_1.jpg","img_3_1.jpeg","img_4_1.jpeg","img_4_2.jpeg","img_5_1.jpeg","img_6_1.jpeg","img_6_2.jpeg","img_7_1.jpeg","img_8_1.jpeg","img_9_1.jpeg","img_9_2.jpeg"])});

  await new Promise(resolve => setTimeout(resolve, 1500));
  document.getElementById('loading').className = "hidden";

  if (START_DAY <= day && day <= END_DAY) {
    document.getElementById('now').className = "";
  } else {
    document.getElementById('not-yet').className = "";
  }
};

}).call(this)}).call(this,require('_process'))
},{"_process":2}],2:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[1]);
