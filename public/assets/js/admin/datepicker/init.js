$(function() {
    $('#addDate').datetimepicker({
        dateFormat: "yy-mm-dd",
        timeFormat: "HH:mm:ss",
        controlType: "select",
        oneLine: true,
        hourMin: 0,
        hourMax: 23,
        minuteStep: 5,
        defaultDate: new Date()
    });
});
