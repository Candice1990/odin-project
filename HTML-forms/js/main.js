$(function() {

    $("#myForm").validate({
        rules: {
            email: "required",
            confirmEmail: {
                required: true,
                equalTo: "#email"
            },
            zipcode: "required",
            password: "required",
            confirmPassword: {
                required: true,
                equalTo: "#password"
            },
            terms: "required"
        },
        messages: {
            email: "Please enter a valid email address.",
            confirmEmail: "Email addresses do not match",
            zipcode: "Please enter a 5 digit zip code",
            password: "Please enter a strong password",
            confirmPassword: "Passwords do not match.",
            terms: "Please check that you understand the terms and conditions."
        }
    });

    jQuery.validator.addClassRules({
        zipcode: {
            required: true,
            digits: true,
            minlength: 5,
            maxlength: 5
        }
    });

});