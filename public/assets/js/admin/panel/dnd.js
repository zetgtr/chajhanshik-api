var runed = false;
$(document).ready(function () {
    $('#target').nestable({
        group: 1,
        maxDepth: 5
    });
    $('#source').nestable({
        group: 1,
        maxDepth: 1
    });
    var id = $(document).find('input[type=hidden][name=id_nav]').val();
    $('#source').on('change', function () {
        serialize($('#target').nestable('serialize'), id);
    });

    $('#target').on('change', function () {
        if ($(document).find('input[type=hidden][name=id_nav]').length) {
            serialize($('#target').nestable('serialize'), id);
        }
    });

    var delay = 800;
    var handler = null;
    $('#searchmachineform').on('change', 'input[type=checkbox]', function (e) {
        if (handler === null) {
            handler = setTimeout(gosearch, delay);
        } else {
            clearTimeout(handler);
            handler = setTimeout(gosearch, delay);
        }
    });
    $('#searchmachineform').submit(function (e) {
        e.preventDefault();
        clearTimeout(handler);
        gosearch();
    });
    $('#searchmachineform').on('input', "input[type=text]", function (e) {
        if (handler === null) {
            handler = setTimeout(gosearch, delay);
        } else {
            clearTimeout(handler);
            handler = setTimeout(gosearch, delay);
        }
    });
    $('#searchmachineform').on('focus', "input[type=text]", function (e) {
        clearTimeout(handler);
    });
});



// function gosearch() {
//     var value = $('#searchmachineform').find('input').val();
//     var exclude = $('#target').nestable('serialize');
//     $('#source').searchmachine().options.requestData.exclude = exclude;
//     $('#source').searchmachine().run(value).then(
//         function (data) {
//             if (data.count > 0) {
//                 if ($('#source').find('.dd-empty')) {
//                     $('#source').append(tmpl('ddtheme', {}));
//                 }
//                 var target = $('#source').find('.dd-list');
//                 data = data.response;
//                 var tmplt = null;
//                 if (typeof data !== typeof undefined && (tmplt = $('#tmpltItem').length, tmpl)) {
//                     var itemTemplate = tmpl('tmpltItem');
//                     $.each(data, function () {
//                         target.append(itemTemplate(this));
//                     });
//                 }
//             } else {
//                 $('#source').append(tmpl('emptyItem', {}));
//             }
//         },
//         function (error) {
//             console.log(error);
//         }
//     );
//     $('#source').searchmachine().options.requestData.exclude = [];
//     if (value == '') {
//         runed = false;
//     } else {
//         runed = true;
//     }
// }

function serialize(data, id) {
    let empty = $(".dd-empty").first().clone()
    let container = $('.dd-empty').closest('.dd');
    $('.dd-empty').remove();
    container.append(empty);
    console.log(data,id)
    $.ajax({
        type: "post",
        url: "/api/navigation/set/"+id,
        data: {
            items: data,
            id: id,
            method: 'navigation_links.list.serialize'
        },
        dataType: "json",
        success: function (response) {
            if (!response.status) {
                showAlert('alert-danger', response.error, 1500);
            } else {
                showAlert('alert-success', response.message, 1500);
            }
        }
    });
}
