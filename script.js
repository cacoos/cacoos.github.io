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
  var fs = require('fs');
  fs.readdir('./img/', (err, files) => {
    const todayImagesNames = files.filter((value) => value.startsWith(`img_${day - START_DAY}_`));
    if (todayImagesNames.length === 0) return;

    document.getElementById('first-image').src = "img/" + todayImagesNames[0];
    if (todayImagesNames.length === 2) {
      document.getElementById('second-image').src = "img/" + todayImagesNames[1];
      document.getElementById('second-image-div').className = "w-1/2 px-1";
    }

    document.getElementById('counter').textContent = `Día ${day - START_DAY}/34`;
    document.getElementById('caption').textContent = TEXTS[day - START_DAY];
  });

  await new Promise(resolve => setTimeout(resolve, 1500));
  document.getElementById('loading').className = "hidden";

  if (START_DAY <= day && day <= END_DAY) {
    document.getElementById('now').className = "";
  } else {
    document.getElementById('not-yet').className = "";
  }
};
