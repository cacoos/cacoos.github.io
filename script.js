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
  "Ya te olvidaste de mí? I am watching you",
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
  var fs = require('fs');
  fs.readdir('./img/', (_, files) => {
    const todayImagesNames = files.filter((value) => value.startsWith(`img_${day - START_DAY}_`));
    if (todayImagesNames.length === 0) return;

    document.getElementById('first-image').src = "img/" + todayImagesNames[0];
    if (todayImagesNames.length === 2) {
      document.getElementById('second-image').src = "img/" + todayImagesNames[1];
      document.getElementById('second-image-div').className = "w-1/2 px-1";
    }

    document.getElementById('counter').textContent = `Día ${day - START_DAY + 1}/33`;
    document.getElementById('caption').textContent = TEXTS[day - START_DAY];
  });

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
