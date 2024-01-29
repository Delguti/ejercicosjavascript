function checkAnswers() {
    var points = 0;

    if(document.querySelector('input[name="q1"]:checked').value==='paris'){
        points++;
    }

    if(document.querySelector('input[name="q2"]:checked').value==='tokyo'){
        points++;
    }

    if(document.querySelector('input[name="q3"]:checked').value==='Lima'){
        points++;
    }

    var resultDiv = document.getElementById('result');
    resultDiv.style.color = 'black';
    resultDiv.innerHTML = 'Obtuviste ' + points + ' puntos.';

    if (points===3) {
        resultDiv.style.color = 'green';
        resultDiv.innerHTML += 'Felicidades, respuestas correctas';
    } else {
        resultDiv.style.color = 'red';
        resultDiv.innerHTML += 'Hay algunas respuestas incorrectas';
    }

}