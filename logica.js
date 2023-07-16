var cor1 ="rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) +")";
var cor2 ="rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) +")";
var cor3 ="rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) +")";
var cor4 ="rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) +")";
var cor5 ="rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) +")";
var cor6 ="rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) +")";
var cor7 ="rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) +")";
var cor8 ="rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) +")";
var cor9 ="rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) +")";

document.getElementById('cor1').style.backgroundColor = cor1;
document.getElementById('cor2').style.backgroundColor = cor2;
document.getElementById('cor3').style.backgroundColor = cor3;
document.getElementById('cor4').style.backgroundColor = cor4;
document.getElementById('cor5').style.backgroundColor = cor5;
document.getElementById('cor6').style.backgroundColor = cor6;
document.getElementById('cor7').style.backgroundColor = cor7;
document.getElementById('cor8').style.backgroundColor = cor8;
document.getElementById('cor9').style.backgroundColor = cor9;

do {
    
var escolha = 'cor' + Math.floor(Math.random() * 10);
var color = document.getElementById('color');
    
} while (escolha != '') {

if(escolha == 'cor1'){
color.innerHTML = cor1;
} else if (escolha == 'cor2'){
    color.innerHTML = cor2;
} else if (escolha == 'cor3'){
    color.innerHTML = cor3;
} else if (escolha == 'cor4'){
    color.innerHTML = cor4;
} else if (escolha == 'cor5'){
    color.innerHTML = cor5;
} else if (escolha == 'cor6'){
    color.innerHTML = cor6;
} else if (escolha == 'cor7'){
    color.innerHTML = cor7;
} else if (escolha == 'cor8'){
    color.innerHTML = cor8;
} else if (escolha == 'cor9'){
    color.innerHTML = cor9;
}

}
    


function certo(id) {

    if(document.getElementById(id).style.backgroundColor == color.innerHTML) {
        window.location = "index.html";
    } else {
        document.getElementById(id).style.backgroundColor = '#f9e6fd';
    }
}
