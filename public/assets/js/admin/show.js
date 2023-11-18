$(document).ready(()=>{
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $('.show-publish').on('click',(e)=>{
        e.preventDefault()
        let url = $(e.target).attr('href')
        if(!url)
        {
            url = $(e.target).closest('.show-publish').attr('href')
        }
        $.ajax({
            type: "GET",
            url: url,
            success: function(result) {
                if (result.status) {
                    let element = $(e.target).closest('.show-publish')
                    if(!element){
                        element = $(e.target)
                    }
                    if(result.publish){
                        element.attr('class','btn btn-success show-publish')
                        element.find('i').attr('class','far fa-eye')
                    }else {
                        element.attr('class','btn btn-default show-publish')
                        element.find('i').attr('class','far fa-eye-slash')
                    }
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
})
