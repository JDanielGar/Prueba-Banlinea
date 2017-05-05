// DOM interfase

$(window).resize(function() {
    validatePlaceholders();
});

function validatePlaceholders() {
    if ($(window).width() <= 420) {
        setPlaceholders();
    } else {
        deletePlaceholders();
    }
}

function deletePlaceholders() {
    $("#email_input").attr("placeholder", "");
    $("#car_branding_select option:first").empty().append("");
    $("#model_car_select option:first").empty().append("");
    $("#year_car_select option:first").empty().append("");
}

function setPlaceholders() {
    $("#email_input").attr("placeholder", "Email");
    $("#car_branding_select option:first").empty().append("Marca del auto");
    $("#model_car_select option:first").empty().append("Modelo del auto");
    $("#year_car_select option:first").empty().append("Año");
}

validatePlaceholders();

// DOM interaction

$(".submit-button").click(function(){
    if(validateData()){
        car_brand = $("#car_branding_select option:selected" ).text();
        car_model = $("#model_car_select option:selected" ).text();
        car_year = $("#year_car_select option:selected" ).text();
        email = $("#email_input").val();

        submits.push({
            "car_brand": car_brand,
            "car_model" : parseInt(car_model),
            "car_year" : parseInt(car_year),
            "email" : email
        })
        alertify.alert("Modelo de carro: "+ car_model +"<br> Modelo del carro: " + car_model + "<br> Año: " + car_year + "<br> Email: " + email );
    }
});

function validateData(){
    if($("#car_branding_select").val()==0 || $("#model_car_select").val()==0 || $("#year_car_select").val()==0 || $("#email_input").val()=="" ){
        alertify.alert("Hace falta llenar campos");
        return false;
    }
    else {
        if(validateEmail($("#email_input").val())){
            return true;
        }
        else {
            alertify.alert("Escriba un email valido");
        }
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// Data

submits = [];