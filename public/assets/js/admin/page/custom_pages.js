$(document).ready(function () {

    $('#pages').nestable({
        group: 5,
    });

    var pageIdContainer = $('#page input[name=page]');
    var id = 0;

    if (pageIdContainer.val()) {
        id = parseInt(pageIdContainer.val());
        console.log(id);
    } else {
        id = 0;
    }
    var ddItem = null;
    try {

        if (!id) throw new Error('Enter url');

        ddItem = $('#pages .dd-item[data-id=' + id + ']');
        if (!ddItem || !ddItem.length) throw new Exception('Enter url');

        ddItem.addClass('dd-item-active');

    } catch (error) {
        var e = jQuery.Event('additem');
        let html = $('#page_title').length && $('#page_title').val().length ? $('#page_title').val() : 'Новая страница';
        e.html = html;
        e.attrList = { 'data-id': id };
        console.log(e);
        $('#pages').trigger(e);
        ddItem = $('#pages .dd-item[data-id=' + id + ']');

    }

    ddItem.addClass('dd-item-active');

    $('#page_title').on('blur', function () {
        let ttl = $(this).val();
        if (ttl.length) {
            $('#pages .dd-item[data-id=' + id + '] .dd-content').html(ttl);
        } else {
            $('#pages .dd-item[data-id=' + id + '] .dd-content').html('Введите название страницы');
        }
    });

    $('#pages').on('change', function () {
        let parent = $('#pages .dd-item[data-id=' + id + ']').parents('.dd-item');
        parentId = parent && parent.length ? parseInt(parent.attr('data-id')) : 0;
        $('#parent').val(parentId);

        var data = {};
        data.method = 'pagecreator.path.rebase';
        data.structure = $(this).nestable('serialize');


        $.ajax({
            type: "post",
            url: "/ajax.enter.php",
            data: data,
            dataType: "json",
            success: function (response) {
                /* if (!response.status) {
                    html = showAlert('alert-danger', response.message, 2000);
                    $('.card-body').append(html);
                } */
            }
        });

    });
    $(document).on('click', '.link-name', function (e) {
        e.preventDefault();
        e.stopPropagation();
    })

    /* >>> create breadcrumbs
    $(document).on('dblclick', '.link-name', function (e) {
        if (document.selection && document.selection.empty) {
            document.selection.empty();
        } else if (window.getSelection) {
            var sel = window.getSelection();
            sel.removeAllRanges();
        }
        e.preventDefault();
        e.stopPropagation();
        $(this).addClass('editing');
        let $this = $(this);
        let id = parseInt($(this).parents('.dd-item').attr('data-id'));
        let input = document.createElement('input');
        input.value = $(this).html();
        let submit = function () {
            // Send ajax request
            $input = $(this);
            $.ajax({
                type: "post",
                url: "/ajax.enter.php",
                data: {
                    method: 'admin.custom_pages.breadcrumbs.set',
                    name: input.value,
                    id: id
                },
                dataType: "json",
                success: function (response) {
                    if (response.status) {
                        $this.html(response.name);
                    } else {
                        console.error(response.message);
                    }
                    $this.removeClass('editing');
                    $input.remove();
                }
            });
        }
        $(input)
            .on('keypress', function (e) {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    e.stopPropagation();
                    submit();
                }
            })
            .on('blur', submit)
            .appendTo(this)
            .focus();
    });
    */

});

function initScroll(list) {
    list.each(function () {
        $(this).perfectScrollbar({
            wheelSpeed: 0.22,
            wheelPropagation: false,
            minScrollbarLength: 20
        });
    });
}
