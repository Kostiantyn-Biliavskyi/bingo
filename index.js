document.getElementById('prompt-form-container').hidden = true;
var block = document.getElementById('prompt-form-container');
var form = document.getElementById('prompt-form');

function focus1() {
    document.getElementById('prompt-form-container').hidden = "";
    form.text.focus();

    let firstElem = form.elements[form.elements.length - 1];
    let text = form.elements[0];

    firstElem.addEventListener("keydown", key);// переключение между 'Tab',недаёт выйти из диалогового окна, по кругу переключается
    function key(e) {
        if (e.key == 'Tab') {
            text.focus();
            e.preventDefault();
        }
    };

    text.addEventListener('keydown', key1);
    function key1(e) {
        if (e.key == 'Tab' && e.shiftKey) {
            firstElem.focus();
            e.preventDefault();
        }
    };
};

function gotwit(e) {
    let text1 = form.text.value;
    if (text1 == '' || text1 == ' ') {
        e.preventDefault();// если пустая форму не отправляет её,отменяет действие браузера по умолчанию 
    } else {
        document.getElementById('prompt-form-container').hidden = true;
        alert('Вы ввели : ' + text1);
    }
}
form.addEventListener("submit", gotwit);

function stop(e) {
    if (e.code == 'Escape') {
        alert('Вы ввели : null');
        form.text.value = '';
        document.getElementById('prompt-form-container').hidden = true;
    }
};
function stop1() {
    alert('Вы ввели : null');
    form.text.value = '';
    document.getElementById('prompt-form-container').hidden = true;
};

form.addEventListener("keydown", stop);
form.cancel.addEventListener("click", stop1);

button.addEventListener("click", focus1);

// ---------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
var tyr;
function preloadImages(sources, callback) {
    var sum = 0;
    for (let a = 0; a < sources.length; a++) {

        tyr = document.createElement("img");
        tyr.src = sources[a];
        tyr.id = 'sew';
        tyr.style.width = 100 + 'px';
        button.after(tyr);
        tyr.addEventListener("load", testLoaded);
        tyr.addEventListener("error", testLoaded);
        sum = sum + tyr.offsetWidth;
    }
    alert(sum);
    // tyr.addEventListener("load", testLoaded);
    //  tyr.addEventListener("error", testLoaded);
}

// ---------- тест ----------

var sources = [
    "https://en.js.cx/images-load/1.jpg",
    "https://en.js.cx/images-load/2.jpg",
    "https://en.js.cx/images-load/3.jpg"
];

// добавляем случайные символы к ссылкам, чтобы избежать кеширования
for (let i = 0; i < sources.length; i++) {
    sources[i] += '?' + Math.random();
}

// для каждого изображения
// создадим другое изображение с аналогичным src и проверим, есть ли у нас его ширина
function testLoaded() {
    var widthSum = 0;
    for (let i = 0; i < sources.length; i++) {
        let img = document.createElement('img');
        img.src = sources[i];
        widthSum += img.offsetWidth;
    }
    alert(widthSum + '   - hello');
}

// каждое изображение в разрешении 100x100, итоговая сумма их ширин должна быть 300
preloadImages(sources, testLoaded);
