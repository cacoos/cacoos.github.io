(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (process){(function (){
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
console.log('Now', now);
var day = Math.floor(diff / oneDay);

console.log('Hour', now.getHours(), 'Day', day);

const START_DAY = 214
const END_DAY = START_DAY + 33

const TEXTS = [
  "Te vas te vasss, pásalo excelente feita. Cuando estábamos viendo las maletas pensaba mmmm chiguals quepo en esa ahhhh. Sorry por hacerte subir de nuevo las escaleras para sacar la foto por dentro, pero habría sido raro y sospechoso que te pida esta foto así no más juju. Suerte en tu viaje, y una vez más: te quiero! Mañana abre esta página de nuevo 😘",
  "Malito este año nuevo. A la izquierda un Caco fresco. A la derecha no sé, no me acuerdo jajajaj, solo sé que estabamos cuidando a un wn que estaba dando la cacha y que estaba lloviznando (o ssshhhhispeando 🌊). No todos los días van a ser fotos mías, pero just in case ya me olvidaste, aquí ya me recuerdas de nuevo. Te quiero fea, sigue disfrutandinggggggg",
  "Es bacán esta foto. Como que se nota que me gustai harto y estoy feliz. Tu no tanto pero ahora estai en las Europas, asiq si deberías estar feliz (wa). Si esta página no mufó el viaje y mis cálculos no fallan (difícil ahhh), me voy hoy a la yapla 🏖️ haciéndole honor a la guayyyyabera. Tkm",
  "jajajjajj donde todo empezó. Estabai super sobria oe jajajaja. Me dio risa que antes (cuando estabamos juntos pero antes) no me contabai na de estas cosas. Ahora me contai 'naaa si en ese carrete yo le dije a la Anita: me gusta ese wacho' jajajj. Es bacán q nos tengamos tanta confianza. te quiero fea, mañana un próximo capítulo, waaa jajaj",
  "Feliz cumple mes 💘 no me gusta mucho celebrarlos pero decirlo no cuesta nada juju. buen carrete este, era tela la novia 👀 jajaja. Es como el recuerdo más bacán q tengo de la disco (aunq no daba ni pa disco), lo pasé bien ahí. Ojalá cuando vuelvas regaloniemos harto y dps nos vayamos a detonar a la disco Zoom. Tkm",
  "ohhhh me salió esta foto, y quiero puro ir a Fantasilandia. Te acordai que te dije: 'nooo si con pipe vamos a ir a fantasilandia y dps a tirarnos en paracaídas', obviamente el weon se llenó de trámites por el tema del pasaporte y no pudimos ir, pero weno, da lo mismo. Quiero ir a Fantasilandia de nueooooo contigo y subirnos a toas las wás (a todas sipo). Anda a algo así allá, deben ser bacanes. Tkm",
  "Los malditos ctm que se querían comprar el cerro. Que lo coooompren po, si total ahora vamos al manquehue 😎 jajaja. Ya, si ahora te meto más presión al subir cerros, voy a llevar un látigo 'avanza mierrrda' jaj. Esto lo programé justo dps de hacer el sendo trekking en el Parque Metropolitano. 'LA CAGÓ EL FRÍO, LO EMPINADO Y DIFÍCIL, EXTREMO MÁXIMO.', mencionó Catalina Salinas a la salida del parque, con heridas de guerra después de haber luchado contra varios pumas del sector",
  "Hablando el otro día del carrete en la disco Zoom y que van puros pendejos a Eve. Y nosotros? me acabo de acordar que fuimos po jajaj, acá la evidencia. Seguramente ahora estas en algun bar o disco pasandolo la raja, o estas viendo este mensajín acostada curadita. Que sepas que te quiero muuuuuuuuucho, aprovecha porque los dias pa que me veas (y disfrutes allá) van a pasar volando 😘 Aaaah oye, te quiero",
  "Sería muy chistoso que hoy andes mañosa por alguna razón, porq todo esto fue programado y escrito antes jajaj. Sentí que hoy podías estar como la foto por algo, no sé. Desde que fuimos al Bar Luna me comunico con los espíritus. O la luna se comunica conmigo, los ancestrales me dan señales o tambien, bien probable, sigo medio curao despues del trago azulito",
  "Dia 10 ah, notable lo fácil que fue cagarte en ese juego. Te lo merecíai igual 😬. Por todo lo que había pasado, dudé mucho al día siguiente de si había sido bueno ir, sentía que la había cagado, que sobraba, no sé jaja. Pero menos mal fui, ojalá no te separis de mi en harto tiempo mas. Te quiero fea, me gustai mucho 💘",
  "Fome mi pedida de pololeo o no? Esq fue como lo mismo en verdad, sentía q estaba pololeando sin nombre (o no? bueno eso pensaba jajj). Es bacán esto de programar algo, es como mandar cartas. Se escribe sin pensar y no recibes nada de vuelta, asiq puedes decir cosas que no quieres recibir respuesta jaja. Aprovechando eso, te voy a contar algo, y porfa no me digas nada sobre esto, porque no me quiero acordar que te lo dije, me da verguenza porq es una estupidez jajaj. Uno de los miedos más grandes que tengo en una relación es que sean infiel. Yo siempre saco el tema y te digo q me carga la gente que es infiel y la pelo y todo, pero en vd es porque me duele pensar que me puede pasar a mi jajaj, prefiero mil veces que me digan que ya no pasa nada, que soy fome, que le gusta otra persona, lo que sea, pero no lo otro. Y es raro porq yo mismo pienso que la gente insegura en general es celosa, y no pasa conmigo (o eso creo jaj), no pienso tanto. Bueno, eso, Caco una vez mas siendo gil. Un gil enamorao. Te quiero.",
  "Distancia social por favor! Ah, te lo tomaste en serio, unos miles de kilometros no más jajaja. Los shaleca amarilla are the new moda? Este viaje si se tiene que repetir si o sí, pero no a Viña 👀, en un próx capítulo se viene sugerencia?",
  "cacha la modelo pa linda por la chucha. Me tinca que fue esa misma pose cuando dejaste la cagá con la Natu JAJAJA, que me reí. Menos mal no nos detuvieron, no habría podido viajarrrsssss porq me habrían quitado el pase o no? o le estoy dando color? somos unos prófugos, unos bandíosssss",
  "Resumen de la casa de la anita. Chago y sueño a las 3 AM. Lo bacán era volver contigo a la casita a regalonear. Te quiero fea, ojalá el viaje esté de panini, gucci y entero weno. PD: cada vez que miro tu foto con el Chago me enamoro más",
  "Qué Crepes & Waffles, Catalina Salinas Celedón señoras y señores! Los mejores panqueques de la vida, y no miento. Pero solo pa mi. Gracias por hacerme 🤍 Día 14 y toy pensando: habrá servido de algo todo esto? me extrañas menos ahora?",
  "No hay mucha caption aquí. Foto bonita, salgo medio flaco y pálido pero puta que teníamos hambre jajajjaj (cuando fuimos a comer burgirsss). Tkm",
  "Estos tragos fueron los culpables po, no era yo el curao, seguro tenían droga horoscópica o algo. Todavía no descifro por qué cresta vemos la luna a veces jajajajajj. Disfruta feita",
  "Yo creo que es la primera foto que saco ultra rápido y no te escondes. Me gusta mucho jajaj no sé por qué, te acordai? te debo una salida si adivinas dónde es. Te mando un abrazin",
  "JAJAJAJAJAJAJJA buena cara oye. Te deberíai comprar luces como las mías, así te haces automáticamente Tiktoker jajaj, tkm. PD: https://pbs.twimg.com/profile_images/1019349762552758272/8GndmvrT_400x400.jpg",
  "Ya te olvidaste de mí? I am watching you",
  "No sé por qué se ve el screenshot, q paja, pero le da un toque artesanal (waa ajajj). Ya es medio tarde ahora que estoy escribiendo esto, y me dieron ganas de tomarme un mojito maracuyá, después de encontrar esta foto. No tiene relación con nosotros, pero igual la pongo para hoy. Tkm",
  "Caco posting los últimos días ah, qué fome. Me dio risa cuando la encontré (es una que subí a IG) porq no entiendo el fin. Qué chucha importa que hayan 23 grados? es terrible normal jajajaj. Qué gracia tengo? ando de negro, no tengo nada en el pelo, no tengo piercings, cero gracia. Yo cacho que altoque me dejó de seguir gente por subir esta wea anti-influencer",
  "Me voy o no a México? Tengo el bigote dao pal éxito. Así como estos wnes que entran al bar pateando las puertas como dobles (estas como de madera) y disparandole a todos, Caco Vaquero. No sé por qué puse esta foto ni menos este caption. Partí terrible cursi en todo y ahora estás cagás. Perdón por tan poco. Te quiero mucho",
  "Esta es como la 91290823 foto en que salgo con tus lentes. Qué wea que siempre te los pido y me saco fotos jajajajaja, me juro hipster. Qué ganas que vuelva el veranito y carretiemos sin toque de queda. Ya han pasado 23 días, brigido. Tkm",
  "Hace unos días te dije (que raro escribir esto siendo que lo hice todo en un día) que deberíamos repetir la ida a Viña, pero con otra sugerencia de viaje. La foto dice más q mil palabras o no? Tu me dice y nos vamo'. Disfruta las Europas eso sí primero ❤️",
  "La foto pa linda oyessssi. Ya casi un mes y me tinca que te voy a estar extrañando más que la chucha. Sos muy bonita <3",
  "Una foto mía haciendo deporte (o sea, voy a hacer deporte..) Estoy medio perdido con los días pero si no me equivoco, aquí debería estar saliendo de cuarentena asiq este debería ser mi mood ahora. Cómo va el deporte allá? En el super trekking del Parque Metropolitano me dijiste que saldrían a hacer maratón y cosas, va bien eso? Saludos, se me cuida.",
  "Pta que ganas de estar así, acostaditos, viendo una serie (a la vuelta te voy a amarrar pa que veamos Harry Potter). Te quiero infinito feita máxima",
  "28 días y siento que haber programao esto fue musho colorssss (o no?), llevo escribiendo mucho y ha sido muy bacán jajajaj, me acordé de muchas cosas buscando las fotos. Disfruta mucho estos últimos días feita",
  "JAJAJAJAJAJAJ no sé por qué me salió esta wea. Pero puedo decir que @catalinasalinas te cagó firme Catalina. Esa niña tiene cara de soplarle las velas a la hermana en el cumpleaños, terrible maldaosa. Ya si sé, out of context este día, pero me salió y tenía q ponerlo jajajajaj",
  "Han pasado 30 días. He sido iluminado. Un mes y la luz me llama. Esto no es un adiós Catalina, es un hasta siempre. La volaita jaja. En verdad estoy mirando tu avión que están limpiando pa que en algunos días te vengas",
  "Ya te lo había dicho y lo repito 1000 veces: me gustai de todas formas. Así me gustai más todavía, te quiero puro dar un beso, te quiero puro dar un abrazo. te quiero.",
  "Se acabo señores! Hasta acá llega la cosa. Nos vemos pronto. Tkm"
]

window.onload = async function() {
  
  process.nextTick(function(){((_, files) => {
    const todayImagesNames = files.filter((value) => value.startsWith(`img_${day - START_DAY}_`));
    if (todayImagesNames.length === 0) return;

    document.getElementById('first-image').src = "img/" + todayImagesNames[0];
    if (todayImagesNames.length === 2) {
      document.getElementById('second-image').src = "img/" + todayImagesNames[1];
      document.getElementById('second-image-div').className = "w-1/2 px-1";
    }

    document.getElementById('counter').textContent = `Día ${day - START_DAY + 1}/33`;
    document.getElementById('caption').textContent = TEXTS[day - START_DAY];
  })(null,["img_0_1.jpeg","img_10_1.jpeg","img_11_1.jpeg","img_11_2.jpeg","img_12_1.jpeg","img_13_1.jpeg","img_13_2.jpeg","img_14_1.jpeg","img_15_1.jpeg","img_16_1.jpeg","img_17_1.jpeg","img_18_1.png","img_19_1.jpeg","img_19_2.jpeg","img_1_1.jpeg","img_1_2.jpeg","img_20_1.png","img_21_1.png","img_22_1.png","img_23_1.png","img_24_1.jpg","img_25_1.jpg","img_26_1.jpg","img_27_1.jpg","img_28_1.jpg","img_29_1.jpg","img_2_1.jpeg","img_30_1.jpg","img_31_1.jpg","img_32_1.jpg","img_3_1.jpeg","img_4_1.jpeg","img_4_2.jpeg","img_5_1.jpeg","img_6_1.jpeg","img_6_2.jpeg","img_7_1.jpeg","img_8_1.jpeg","img_9_1.jpeg","img_9_2.jpeg"])});

  await new Promise(resolve => setTimeout(resolve, 1500));
  document.getElementById('loading').className = "hidden";

  if (START_DAY <= day && day <= END_DAY) {
    document.getElementById('now').className = "";
    if (day === START_DAY) {
      document.getElementById('first-day').className = "text-sm text-gray-400 pb-2";
    }
  } else if (day > END_DAY) {
    document.getElementById('after-trip').className = "";
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
