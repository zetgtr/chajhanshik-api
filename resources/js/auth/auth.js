$(document).ready(()=>{
    $(".password-eye div").on('click', function(event) {
        if ($('.password-eye input').attr("type") == "text") {
            $('.password-eye input').attr('type', 'password');
            $('.password-eye .fa-eye-slash').addClass("d-none");
            $('.password-eye .fa-eye').removeClass("d-none");
        } else if ($('.password-eye input').attr("type") == "password") {
            $('.password-eye input').attr('type', 'text');
            $('.password-eye .fa-eye-slash').removeClass("d-none");
            $('.password-eye .fa-eye').addClass("d-none");
        }
    });
})
