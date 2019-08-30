var requestURL = 'https://requebernardo.github.io/tecnologia-web/asignaciones/asignacion_9/ciudades/JOSN/tiwanaku.json';
var request = new XMLHttpRequest();
var information = document.getElementById('section');;
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var preguntas = request.response;
    showFaq(preguntas);
}

function showFaq(jsonObj) {
    var  pregunta = jsonObj['faq'];

    for (var i = 0; i < pregunta.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        myH2.textContent = pregunta[i].pregunta;
        myPara1.textContent = 'Secret identity: ' + pregunta[i].respuesta;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        information.appendChild(myArticle);
    }
}