function validateAge() {
    var Bdate = document.forms["age-gate"]["age"].value;
    var Bday = +new Date(Bdate);

    var age = (Date.now() - Bday) / (31557600000);
    if ( age < 13 ) {
        alertify.error('Sorry, but you are not eligible for this sweepstakes.');
        return false
    }
    else if ( $.isNumeric(age) == false ){
        alertify.error('Sorry, your age must be equal to a number.');
        return false
    }
    else{
        $('#age-gate').addClass('hider');
        $('.gate').delay(500).fadeOut('slow');
        $('#hider').show(function(){
            $('#background').delay(400).height($(document).height());
            $('#code').blur();
            setTimeout(function(){
              window.scrollTo(0, 0);
            }, 0);
        });
        window.scrollTo(0,0);
        var ageVal = $('#age').val();
        $('body').css('position', 'relative');
        ageVal = new Date(ageVal);
        document.getElementById("entry_1845520799").valueAsDate = ageVal;
        window.scrollTo(0,0);
        // $('#code-gate').removeClass('hider');
        return false
    }
}

// function validateCode() {
//     var code = document.forms["code-gate"]["code"].value;
//     code = code.trim().toLowerCase();

//     if (code == "confident"){
//         $('#hider').show(function(){
//             $('#background').delay(400).height($(document).height());
//             $('#code').blur();
//             setTimeout(function(){
//               window.scrollTo(0, 0);
//             }, 0);
//         });
//         $('.gate').delay(500).fadeOut('slow');
//         window.scrollTo(0,0);
//         var ageVal = $('#age').val();
//         $('body').css('position', 'relative');
//         ageVal = new Date(ageVal);
//         document.getElementById("entry_1845520799").valueAsDate = ageVal;
//         return false
//     }
//     else{
//         alertify.error("Sorry, the codeword you entered is not valid.");
//         return false
//     }
// }
