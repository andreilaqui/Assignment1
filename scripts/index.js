/** 
* @name: Assignment1 
* @Course Code: SODV1201 
* @class: Software Development Diploma program. 
* @author: Andrei Laqui
*/ 


$(document).ready(function() {
    
    setTimeout(function() {
        toggleHiddenElementbyID('my-name');
    }, 10000);
    
    
    updateFooter();
});



/*AL - I'll put my functions down here*/

const toggleHiddenElementbyID = (id) => {
    $('#' + id).toggle();
}

const updateFooter = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let formattedDate = month + "/" + day + "/" + year;
    // $('#current-date').text(formattedDate);     // instructions in item#1 say "The footer of your page should include current date and copy right information. "
    $('#current-date').text(year);           // instructions in item#6 say "All your page should have a footer that details your full name, copyright @ and year."
}