let number = 0;

document.getElementById("angkaAwal").textContent = number;

document.getElementById("Kurangin").onclick = function (){
    number--;
    document.getElementById("angkaAwal").textContent = number;
}

document.getElementById("Reset").onclick = function (){
    number = 0;
    document.getElementById("angkaAwal").textContent = number;
}

document.getElementById("Tambahin").onclick = function (){
    number++;
    document.getElementById("angkaAwal").textContent = number;
}