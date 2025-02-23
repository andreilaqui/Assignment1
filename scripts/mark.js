/** 
* @name: Assignment1 
* @Course Code: SODV1201 
* @class: Software Development Diploma program. 
* @author: Andrei Laqui
*/

$(document).ready(function() {
    
    $('#mark-convert-btn').click(function() {
        $('#validation-message').text('');

        try {
            let markVal = parseFloat($('#mark-input-box').val());
            
            const errMsgNaN = "Please enter an actual number.";
            const errMsgNeg = "A negative number is not allowed.";
            const errMsgOver = "Please enter a number less than 101.";
            
            if (isNaN(markVal)) {
                throw new Error(errMsgNaN);
            }else if (markVal < 0) {
                throw new Error(errMsgNeg);
            }else if (markVal > 101) {
                throw new Error(errMsgOver);
            }

            let grade = 'Grade ';
            if (markVal > 90) {
                grade += 'A';
                $('#validation-message').text('Outstanding!');  // AL : just a little bit of flair, hope I don't get marked down for it
            } else if (markVal > 80) {
                grade += 'B';
            } else if (markVal > 70) {
                grade += 'C';
            } else if (markVal > 50) {
                grade += 'D';
            } else {
                grade += 'F';
            }

            
            $('#grade').text(`${grade}`);
            $('#grade').show();
        } catch (error) {
            $('#validation-message').text(error.message);
            $('#grade').text('').hide();    //shortcut worked! not advisable, bad readability
        }
    });


});


