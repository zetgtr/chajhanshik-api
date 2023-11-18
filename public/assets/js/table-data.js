$(function(e) {
    "use strict";

    //______Basic Data Table
    $('#basic-datatable').DataTable({
        language: {
            searchPlaceholder: 'Поиск...',
            sSearch: '',
        }
    });


    //______Basic Data Table
    $('#responsive-datatable').DataTable({
        language: {
            searchPlaceholder: 'Поиск...',
            scrollX: "100%",
            sSearch: '',
        }
    });

    //______Delete Data Table
    var table = $('#delete-datatable').DataTable({
        language: {
            searchPlaceholder: 'Поиск...',
            sSearch: '',
        }
    });
    $('#delete-datatable tbody').on('click', 'tr', function() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });
    $('#button').on('click', function() {
        table.row('.selected').remove().draw(false);
    });
    $('#example3').DataTable( {
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal( {
                    header: function ( row ) {
                        var data = row.data();
                        return 'Details for '+data[0]+' '+data[1];
                    }
                } ),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
                    tableClass: 'table'
                } )
            }
        }
    } );
    console.log(1213)
    $('#example2').DataTable({
		responsive: true,
		language: {
			searchPlaceholder: 'Поиск...',
			sSearch: '',
			lengthMenu: '_MENU_ Элементы на странице',
		}
	});

    $('#exampleTable2').DataTable({
		responsive: true,
		language: {
			searchPlaceholder: 'Поиск...',
			sSearch: '',
			lengthMenu: '_MENU_ Элементы на странице',
		}
	});


    //______Select2
    $('.select2').select2({
        minimumResultsForSearch: Infinity
    });

});
