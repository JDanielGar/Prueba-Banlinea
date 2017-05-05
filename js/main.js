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