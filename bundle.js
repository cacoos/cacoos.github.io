(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (process){(function (){
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
console.log('Now', now);
var day = Math.floor(diff / oneDay);

console.log('Hour', now.getHours(), 'Day', day);

const START_DAY = 213
const END_DAY = START_DAY + 35

const TEXTS = [
  "Te vas te vasss, pásalo excelente feita. Cuando estábamos viendo las maletas pensaba mmmm chiguals quepo en esa ahhhh. Sorry por hacerte subir de nuevo las escaleras para sacar la foto por dentro, pero habría sido raro y sospechoso que te pida esta foto así no más juju. Suerte en tu viaje, y una vez más: te quiero! Mañana abre esta página de nuevo 😘",
  "Malito este año nuevo. A la izquierda un Caco fresco. A la derecha no sé, no me acuerdo jajajaj, solo sé que estabamos cuidando a un wn que estaba dando la cacha y que estaba lloviznando (o ssshhhhispeando 🌊). No todos los días van a ser fotos mías, pero just in case ya me olvidaste, aquí ya me recuerdas de nuevo. Te quiero fea, sigue disfrutandinggggggg",
  "Es bacán esta foto. Como que se nota que me gustai harto y estoy feliz. Tu no tanto pero ahora estai en las Europas, asiq si deberías estar feliz (wa). Si esta página no mufó el viaje y mis cálculos no fallan (difícil ahhh), me voy hoy a la yapla 🏖️ haciéndole honor a la guayyyyabera. Tkm",
  "jajajjajj donde todo empezó. Estabai super sobria oe jajajaja. Me dio risa que antes (cuando estabamos juntos pero antes) no me contabai na de estas cosas. Ahora me contai 'naaa si en ese carrete yo le dije a la Anita: me gusta ese wacho' jajajj. Es bacán q nos tengamos tanta confianza. te quiero fea, mañana un próximo capítulo, waaa jajaj",
  "Feliz cumple mes 💘 no me gusta mucho celebrarlos pero decirlo no cuesta nada juju. buen carrete este, era tela la novia 👀 jajaja. Es como el recuerdo más bacán q tengo de la disco (aunq no daba ni pa disco), lo pasé bien ahí. Ojalá cuando vuelvas regaloniemos harto y dps nos vayamos a detonar a la disco Zoom. Tkm",
  "ohhhh me salió esta foto, y quiero puro ir a Fantasilandia. Te acordai que te dije: 'nooo si con pipe vamos a ir a fantasilandia y dps a tirarnos en paracaídas', obviamente el weon se llenó de trámites por el tema del pasaporte y no pudimos ir, pero weno, da lo mismo. Quiero ir a Fantasilandia de nueooooo contigo y subirnos a toas las wás (a todas sipo). Anda a algo así allá, deben ser bacanes. Tkm",
  "Los malditos ctm que se querían comprar el cerro. Que lo coooompren po, si total ahora vamos al manquehue 😎 jajaja. Ya, si ahora te meto más presión al subir cerros, voy a llevar un látigo 'avanza mierrrda' jaj. Esto lo programé justo dps de hacer el sendo trekking en el Parque Metropolitano. 'LA CAGÓ EL FRÍO, LO EMPINADO Y DIFÍCIL, EXTREMO MÁXIMO.', mencionó Catalina Salinas a la salida del parque, con heridas de guerra después de haber luchado contra varios pumas del sector",
  "Hablando el otro día del carrete en la disco Zoom y que van puros pendejos a Eve. Y nosotros? me acabo de acordar que fuimos po jajaj, acá la evidencia. Sigue disfrutando fea, te quieroo",
  "Sería muy chistoso que hoy andes mañosa por alguna razón, porq todo esto fue programado y escrito antes jajaj. Sentí que hoy podías estar como la foto por algo, no sé. Desde que fuimos al Bar Luna me comunico con los espíritus. O me cambió el mantra o sigo curao",
  "Dia 9 ah, notable lo fácil que fue cagarte en ese juego. Te lo merecíai igual dps de tantos meses de orgullo sin decirme nada de lo arrepentida que estabai (o al menos por lo que me dijiste jajaj). Te quiero fea, me gustai mucho 💘",
  "Fome mi pedida de pololeo o no? Esq fue como lo mismo en verdad, no cambió mucho desde ese día jajajaj. Es bacán esto de programar algo, es como mandar cartas. Se escribe sin pensar y no recibes nada de vuelta, asiq puedes decir cosas que no quieres recibir respuesta jajaj. Estuvo muy weno ese bar y me queda cerquita, hay que volver: los tom collins se toman en bar. (así se escribe?)",
  "Distancia social por favor! Ah, te lo tomaste en serio, unos miles de kilometros no más jajaja. Los shaleca amarilla are the new moda? Este viaje si se tiene que repetir si o sí, pero no a Viña 👀, en un próx capítulo se viene sugerencia?",
  "cacha la modelo pa linda por la chucha. Me tinca que fue esa misma pose cuando dejaste la cagá con la Natu JAJAJA, que me reí. Menos mal no nos detuvieron, no habría podido viajarrrsssss porq me habrían quitado el pase o no? o le estoy dando color? somos unos prófugos, unos bandíosssss",
  "Resumen de la casa de la anita. Chago y sueño a las 3 AM. Lo bacán era volver contigo a la casita a regalonear. Te quiero fea, ojalá el viaje esté de panini, gucci y entero weno. PD: cada vez que miro tu foto con el Chago me enamoro más",
  "Qué Crepes & Waffles, Catalina Salinas Celedón señoras y señores! Los mejores panqueques de la vida, y no miento. Pero solo pa mi. Gracias por hacerme 🤍 Día 14 y toy pensando: habrá servido de algo todo esto? me extrañas menos ahora?",
  "No hay mucha caption aquí. Foto bonita, salgo medio flaco y pálido pero puta que teníamos hambre jajajjaj (cuando fuimos a comer burgirsss). Tkm",
  "Estos tragos fueron los culpables po, no era yo el curao, seguro tenían droga horoscópica o algo. Todavía no descifro por qué cresta vemos la luna a veces jajajajajj. Disfruta feita",
  "Yo creo que es la primera foto que saco ultra rápido y no te escondes. Me gusta mucho jajaj no sé por qué, te acordai? te debo una salida si adivinas dónde es. Te mando un abrazin",
  "JAJAJAJAJAJAJJA buena cara. Eri la más linda del universo, me gustai así y de todas formas feita máxima 😍. Te deberíai comprar luces como las mías, así te haces automáticamente Tiktoker, tkm. PD: https://pbs.twimg.com/profile_images/1019349762552758272/8GndmvrT_400x400.jpg",
  "Hace unos días te dije que deberíamos repetir la ida a Viña, pero con otra sugerencia de viaje. Dos fotos, dos alternativas 👀 ahora te toca adivinar dónde es cada una. Tu me dices que nos vamos, y nos vamos. Disfruta las Europas eso sí primero ❤️",
  "No sé por qué se ve el screenshot, q paja, pero le da un toque artesanal (waa ajajj). Ya es medio tarde ahora que estoy escribiendo esto, y me dieron ganas de tomarme un mojito maracuyá, después de encontrar esta foto. No tiene relación con nosotros, pero igual la pongo para hoy. Tkm",
  "Caco posting los últimos días ah, qué fome. Me dio risa cuando la encontré (es una que subí a IG) porq no entiendo el fin. Qué chucha importa que hayan 23 grados? es terrible normal jajajaj. Qué gracia tengo? ando de negro, no tengo nada en el pelo, no tengo piercings, cero gracia. Yo cacho que altoque me dejó de seguir gente por subir esta wea anti-influencer",
  "Me voy o no a México? Tengo el bigote dao pal éxito. Así como estos wnes que entran al bar pateando las puertas como dobles (estas como de madera) y disparandole a todos, Caco Vaquero. No sé por qué puse esta foto ni menos este caption. Partí terrible cursi en todo y ahora estás cagás. Perdón por tan poco. Te quiero mucho",
  "Esta es como la 91290823 foto en que salgo con tus lentes. Qué wea que siempre te los pido y me saco fotos jajajajaja, me juro hipster. Qué ganas que vuelva el veranito y carretiemos sin toque de queda. Ya han pasado 23 días, brigido. Tkm",
  "Hola mi wachita. Siento que este día te voy a estar extrañando más que la cresta. Por eso hice una mezcla de fotos, solo por hoy. A la izquierda una Catalina fotogénica que no hay forma que salga mal. A la derecha dos cacos cagando ambas fotos, pa variar. Me gustai tanto tanto tanto tanto. No sé por qué tanto, mira el weon feo de las fotos! Y tu tan linda. Que ganas voy a tener de darte ese beso de nuevo, de abrazarte de nuevo, o de sacarte fotos porque sí, de nuevo. No sabis cuanto te quiero ❤️. Ojalá a la vuelta sigamos haciendo más cosas bacanes. Todavía ni te vas y ya te extrañé escribiendo este mensaje. Te quiero, te quiero, te quiero, hartooo",
  "La foto pa linda. Me movis tanto el piso que estamos en el piso 1 y aún así sigue bajando el ascensor. Oye, ya po, no será mucho? Llevo escribiendo demasiados días, cómo voy a hacer para multiplicar todo lo que escribí por 24 horas y que ahí recien llegues?\nMuchas fotos del Bar Luna, esta es la última. Gracias por llevarme pa allá, fue muy bacán y especial pa mi que hayamos ido a celebrars, aunque no sepa decirlo en persona porque soy un cursi (semi) oculto. Eri la mejor bonita, te quiero.",
  "No tengo idea de dónde es esta foto ni de cuándo, pero se que es de una vez que no se ha repetido en los mensajes jajaj. Estai igual de rica. Te como, entera. Me acordé de algo que me dijiste (a estas alturas del viaje yo creo que ya la puedes responder): cómo va el deporte allá? En el super trekking del Parque Metropolitano me dijiste que saldrían a hacer maratón y cosas, va bien eso? 😛 eres la mensita mas linda, mi mensita mas linda. Aaaaaaaaaaaa no sabi cuanto te quiero, no me canso de escribirte te quiero en todos los mensajes porque te quiero mucho mucho mucho más. Mi piaci, Tu me plais, Eu gosto de você, Volim te, Me gustai 😘",
  "Que ganas de estar así, acostaditos, viendo una serie (a la vuelta te voy a amarrar pa que veamos Harry Potter). No tengo nada más que decir. La foto lo dice todo: 5 DÍAS PA QUE TE VENGAS WUJUUUU. Te quiero infinito feita máxima",
  "Sé que ahora me quieres más que antes. Al menos ahora te sabes de memoria mi cumpleaños (supongo?). jajj me lo tomo con humor, porsiaca. Pero weno, dado que ahora me quieres más que antes, si o sí me vas a hacer más de estas cosas ricas o no? Mi fantasía es comer de estos mientras te como a ti. Así de simple, no necesito nada más en la vida. Disfruta estos últimos días fea, te quiero mucho.",
  "JAJAJAJAJAJAJ no me preguntas por qué puse esto. Pero puedo decir que @catalinasalinas te cagó firme Catalina. Esa niña tiene cara de soplarle las velas a la hermana en el cumpleaños, terrible maldaosa. Ya si sé, out of context este día, pero me salió y tenía q ponerlo jajajajaj (aún me quedan muchas fotos 😛). Aprovecho de poner acá algo q me di cuenta recién: si tu miras el código, en verdad parezco un psicópata. Piensa que son 33 frases hablando solo y más encima enamorao. Es como de la serie You. Ojalá no sea tan intenso y se diluya con los días jajajj",
  "Han pasado 31 días. He sido iluminado. Un mes y la luz me llama. Algo desciende el cielo: no, no es un avión, no, no es un pájaro. 'Qué chucha es entonces!?', exclama Joaquín. Es la muerte que llega por no poder soportar más estar sin Catalina? Nop, es la mismísima Catalina Salinas Celedón, un ángel que ya se ve en el avión llegando. Yiaaa jaja de Caco Vaquero a Caco Poeta. Perdón por tan poco. Te quiero.",
  "Ya te lo había dicho y lo repito 100000000000000000 veces: me gustai de todas formas. Así te ves exquisita, o yo estoy muy loco por ti. Me encanta cuando me mandas fotos así random (me encanta cuando me mandai fotos de ti, de la forma que sea). Te quiero puro dar un beso, ya queda menos. te quiero.",
  "Se acabo señores! Hasta acá llega la cosa. Se viene se viene se viene, no queda nada pa vernossssssss, llega rápido. Te quierooooo muchooo. Ojalá te hayan gustado todos mis mensajitos polla, es lo mínimo que podía hacer para que no te olvides de mí en tu viaje. Igual, sé que calculé mal, así que van unos días más porsiacaso ❤️. De Caco, par mi Catalina. Te quiero.",
  "Me voy a pegar el show con este discurso a TV abierta: 'Por qué estás leyendo este mensajito y no estai pegada a mi ahora mismo. Por qué. Catalina Salinas, tu que estás al otro lado de la pantalla, vente en este instante a Chile. No sé que va a pasar en el futuro pero si estás leyendo esto es porque no has llegado, y seguramente voy a estar pa la cagá extrañandote, vente vente vente. Te quiero infinito'",
  "Yo creo que ya llegaste.. pero igual unos días más no le hace mal a nadie o si? Ya veo que llegas y por alguna razón no te puedo ver, no sé. Te conozco, sé que en algun momento de todos estos mensajitos de preguntarás: de dónde chucha sacai tantas fotos? Yo tampoco sé, solo aparecen. Y son puras fotos que he sacado yo jeje. Quién es el weno pa sacar fotos ahora ah? Te quiero pollita linda, quiero que me invites a darme un beso cuando leas esto 😏",
  "Eres verdaderamente la más linda del universo. Ni cagando te acuerdas que te saqué estas fotos, pero las tengo guardadas en una carpetita y no las quería liberar. Pa que caches que nunca te he olvidao, wachita linda. Te quiero infinito 🥰 ojalá cuando estes leyendo este mensaje estes abrazadita conmigo. Yyyy ahora si me despido, te quiero infinito, algún día (quién sabe cuando, o por cuánto) volverán estos mensajes, así que guarda el QR (dime q no lo has perdido 😧). Te quiero 💘. "
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
  })(null,["img_0_1.jpeg","img_10_1.jpeg","img_11_1.jpeg","img_11_2.jpeg","img_12_1.jpeg","img_13_1.jpeg","img_13_2.jpeg","img_14_1.jpeg","img_15_1.jpeg","img_16_1.jpeg","img_17_1.jpeg","img_18_1.png","img_19_1.jpeg","img_19_2.jpeg","img_1_1.jpeg","img_1_2.jpeg","img_20_1.png","img_21_1.png","img_22_1.png","img_23_1.png","img_24_1.jpeg","img_25_1.jpg","img_26_1.jpeg","img_27_1.jpg","img_28_1.jpeg","img_29_1.jpg","img_2_1.jpeg","img_30_1.jpg","img_31_1.jpg","img_32_1.jpg","img_33_1.jpeg","img_33_2.jpeg","img_34_1.jpeg","img_35_1.jpeg","img_35_2.jpeg","img_3_1.jpeg","img_4_1.jpeg","img_4_2.jpeg","img_5_1.jpeg","img_6_1.jpeg","img_6_2.jpeg","img_7_1.jpeg","img_8_1.jpeg","img_9_1.jpeg","img_9_2.jpeg"])});

  await new Promise(resolve => setTimeout(resolve, 800));
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
