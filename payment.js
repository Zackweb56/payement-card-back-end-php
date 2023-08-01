let name = document.getElementById('name');
let adress = document.getElementById('adress');
let tele = document.getElementById('tele');

let paypal = document.getElementById('paypal');
let bank = document.getElementById('bank');

let type_pay = document.getElementsByName("paypal_bank");

let email = document.getElementById('email');
let pass = document.getElementById('pass');


let num = document.getElementById('num');
let month = document.getElementById('month');
let year = document.getElementById('year');
let code = document.getElementById('code');

let validate = document.getElementById('validate');

let error = document.getElementById('error');



function verifier(){
    // console.log("clicked");
    error.innerHTML='';
    // tele_verified = !/^[0-9]{9}$/;
    if(name.value == '' || adress.value == '' || tele.value == '' || (document.getElementById('paypal_check').checked && (email.value == ''  || pass.value == '')) || (document.getElementById('bank_check').checked && (num.value == '' || month.value == '' || year.value == '' || code.value == ''))){
        error.style.display = "block";
        error.innerHTML += "vous avez oublié de remplir un champ";
    }else if(!/^\d{9}$/.test(tele.value)){
        error.style.display = "block";
        error.innerHTML += "telephone doit contenir seulement 9 chifer!";
    }else if(document.getElementById('paypal_check').checked && !/^@$/.test(email.value)){
        error.style.display = "block";
        error.innerHTML += "email doit contenir le symbole @!";
    }else if(!/^\d{16}$/.test(num.value)){
        error.style.display = "block";
        error.innerHTML += "Numero de la carte doit contenir 16 chifer!";
    }else if(!/^\d{3}$/.test(code.value)){
        error.style.display = "block";
        error.innerHTML += "code de vérification doit contenir 3 chifer!";
    }else{
        error.style.display = "block";
        error.innerHTML += "success!";
    }
}

function change_paypal_bank(){
    let paypal_inps = document.getElementById('paypal_inputs');
    let bank_inps = document.getElementById('bank_inputs');

    if(document.getElementById('paypal_check').checked){
        paypal_inps.style.display = "block";
        bank_inps.style.display = "none";
    }else if(document.getElementById('bank_check').checked){
        paypal_inps.style.display = "none";
        bank_inps.style.display = "block";
    }

}

