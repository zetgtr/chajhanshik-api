$(document).ready(()=>{
    $('#country-selector').on('shown.bs.modal', function () {
        $('#add_roles').trigger('focus')
    })
})
// $(document).ready(()=>{
//     $('#modaldemo8').on('shown.bs.modal', function () {
//         console.log(this);
//     })
// })
