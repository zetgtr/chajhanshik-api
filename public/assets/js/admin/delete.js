$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $('.delete').on('click',(e)=>{
        e.preventDefault()
        let url = $(e.target).attr('href')
        if(!url)
        {
            url = $(e.target).closest('.delete').attr('href')
        }
        if(confirm("Вы точно хотите удалить?"))
        $.ajax({
            type: "DELETE",
            url: url,
            success: function(result) {
                if (result.status) {
                    $(e.target).closest('.delete-element').remove()
                }
            },
            error: function(xhr, status, error) {
                try {
                    let errorMessage = JSON.parse(xhr.responseText).message;
                    console.log(errorMessage);
                } catch (e) {
                    console.log('Error:', error);
                }
            }
        });
    })
});
