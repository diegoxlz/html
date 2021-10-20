function somar(){
    var n1 = parseInt(document.getElementById('n1').value, 10);
    var n2 = parseInt(document.getElementById('n2').value, 10);
    document.getElementById('resposta').innerHTML = n1 + n2;
    document.getElementById('resposta').style.display = 'block';
    }
