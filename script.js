function validpaswd(x) {
    if (x.length < 10) {
        return false;
    }
    var majus = 0;
    var minus = 0;
    var chiff = 0;
    var spe = 0;
    for (var i = 0; i < x.length; i++) {
        if ("A" <= x[i] && x[i] <= "Z") {
            majus += 1;
        } else if ("a" <= x[i] && x[i] <= "z") {
            minus += 1;
        } else if ("0" <= x[i] && x[i] <= "9") {
            chiff += 1;
        } else {
            spe += 1;
        }
    }
    if (majus < 1 || minus < 1 || chiff < 1 || spe < 1) {
        return false;
    }
    return true;
}

function validemail(x) {
    if (x.indexOf("@") === -1 || x.lastIndexOf(".") === -1) {
        return false;
    }
    let i = x.indexOf("@");
    let j = x.lastIndexOf(".");
    let ch1 = x.substring(0, i);
    let ch2 = x.substring(i + 1, j);
    let ch3 = x.substring(j + 1);
    if (ch1 === "" || ch2 === "" || ch3 === "") {
        return false;
    }
    if (ch3.length !== 2 && ch3.length !== 3) {
        return false;
    }
    return true;
}

function verifier() {
    const lang = document.getElementById('lang').value;
    const em = document.getElementById('em').value;
    const mot = document.getElementById('mot').value;
    const cmot = document.getElementById('cmot').value;

    if (lang === "" || em === "" || mot === "" || cmot === "") {
        alert("Tous les champs sont obligatoires.");
        return false;
    }
    if (!validemail(em)) {
        alert("Le email doit être au format ch1@ch2.ch3.");
        return false;
    }

    if (!validpaswd(mot)) {
        alert("Le mot de passe doit respecter les critères de validation.");
        return false;
    }

    if (mot !== cmot) {
        alert("Les mots de passe ne correspondent pas.");
        return false;
    }

    return true;
}
function activer() {
    const bot=document.getElementById("bot") ;
    const but=document.getElementById("but");
    if (bot.checked) {
        but.disabled = false;
    } else {
        but.disabled = true;
    }
    
}
let eyeColorChanged = false; // Variable to track whether the eye color has been changed

function show() {
    const mot = document.getElementById('mot');
    const checkeyepass = document.getElementById('checkeyepass');
    const eye = document.getElementById('eye');
    
    if (checkeyepass.checked) {
        mot.type = "text"; // Change the input type to text
        if (!eyeColorChanged) {
            eye.style.filter = "none"; // Change the image filter only if it hasn't been changed before
            eyeColorChanged = true;
        }
    } else {
        mot.type = "password"; // Change the input type to password
        eyeColorChanged = false; // Reset the variable
    }
}

function changeEyeColor(test) {
    const eye = document.getElementById('eye');
    if (!eyeColorChanged) {
        if (test) {
            eye.style.filter = 'none'; // Reset the image filter when the mouse is over
        } else {
            eye.style.filter = 'invert(97%) sepia(97%) saturate(0%) hue-rotate(68deg) brightness(101%) contrast(103%)';
        }
    }
}
function ma9bolouno() {
    const mot = document.getElementById('mot');
    const i3jeb = document.getElementById('i3jeb');
    var majus = 0;
    var minus = 0;
    var chiff = 0;
    var spe = 0;

    for (var i = 0; i < mot.value.length; i++) {
        var char = mot.value.charAt(i);
        if ("A" <= char && char <= "Z") {
            majus = 1;
        } else if ("a" <= char && char <= "z") {
            minus = 1;
        } else if ("0" <= char && char <= "9") {
            chiff = 1;
        } else {
            spe = 1;
        }
    }

    if (majus + minus + chiff + spe === 0) {
        i3jeb.style.color = "red";
        i3jeb.innerHTML = "faible";
    } else if (majus + minus + chiff + spe === 1) {
        i3jeb.style.color = "red";
        i3jeb.innerHTML = "faible";
    } else if (majus + minus + chiff + spe === 2) {
        i3jeb.style.color = "yellow";
        i3jeb.innerHTML = "moyenne";
    } else if (majus + minus + chiff + spe === 3) {
        i3jeb.style.color = "green";
        i3jeb.innerHTML = "fort";
    } else {
        i3jeb.innerHTML = "";
    }
}
