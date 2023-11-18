$(document).ready(()=>{
    $('#nestable').nestable({
        maxDepth: 3
    }).on('change', updateOutput);
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $('.dd').on('change', function () {
        // var block = $(this).closest('.card');
        // console.log($(this).nestable('serialize'));
        $.ajax({
            url: $('#route_dd').val(),
            type: "post",
            data: {
                items: $(this).nestable('serialize')
            }
        })
    });
})

