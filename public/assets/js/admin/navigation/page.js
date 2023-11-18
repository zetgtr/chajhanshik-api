$(document).ready(()=>{
    $('#page').on('change',(e)=>{
        let id = $('#page option:selected').val();
        if (id != 0){
            $.ajax({
                type: 'get',
                url: '/api/admin/get_page/'+id,
                success(data){
                    $('#url').val(data.url)
                    $('#url').attr('readonly','')
                    $('#title').val(data.title)
                }
            })
        }else {
            $('#url').attr('readonly',false)
        }

    })
})
