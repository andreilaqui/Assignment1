/** 
* @name: Assignment1 
* @Course Code: SODV1201 
* @class: Software Development Diploma program. 
* @author: Andrei Laqui
*/

$(document).ready(function() {
    

    $('#temp-convert-btn').click(function() {
        const conversionOption = $('input[name="conversion"]:checked').val();  //find out which radio button named conversion is checked, get the value
        $('#validation-message').text('');
        
        try {
            let inputVal = parseFloat($('#temp-input-box').val());
            
            const errMsgNaN = "Please enter an actual number.";
            const errMsgNegF = "Farenheit cannot go below -459.67°F. Try to reconsider your input.";
            const errMsgNegC = "Celsius cannot go below -273.15°C. Try to reconsider your input.";
            const errMsgOver = "Please enter a number less than 10001.";
            


            if (isNaN(inputVal)) {
                throw new Error(errMsgNaN);
            }else if (conversionOption==="toCelsius" && inputVal < -459.67) {
                throw new Error(errMsgNegF);
            }else if (conversionOption==="toKelvin" && inputVal < -273.15) {
                throw new Error(errMsgNegC);
            }else if (inputVal > 10000) {
                throw new Error(errMsgOver);
            }

            const tempValue = parseFloat(inputVal);
            if (conversionOption === "toCelsius") {
                convertToCelsius(tempValue);
            } else {
                convertToKelvin(tempValue);
            }

        } catch (error) {
            $('#validation-message').text(error.message);
            $('#tempConverted').text('').hide(); 
        }   
        
       
    });


});

function convertToCelsius(tempFarenheit) {
    let celsius = (tempFarenheit - 32) * (5/9);
    let outputString = `${tempFarenheit}\u00B0 Farenheit is equal to ${celsius.toFixed(2)}\u00B0 Celsius.`; //&deg; did not work with backticks `` so used \u00B0
    $('#tempConverted').text(outputString);
    $('#tempConverted').show();
}

function convertToKelvin(tempCelcius) {
    let kelvin = tempCelcius + 273.15;
    let outputString = `${tempCelcius}\u00B0 Celsius is equal to ${kelvin.toFixed(2)}\u00B0 Kelvin.`;
    $('#tempConverted').text(outputString);
    $('#tempConverted').show();
}


