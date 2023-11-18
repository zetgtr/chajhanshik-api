import { panel_editor_fucken } from "./panel_editor.js";
import {DataHub} from "./Data/dataHub.js";
// import da from "air-datepicker/locale/da";

window.panelEditor = panel_editor_fucken();

((w, d) => {
    window.d = d
    window.findGetParameter = function findGetParameter(parameterName) {
        var result = null,
            tmp = [];
        location.search
            .substr(1)
            .split("&")
            .forEach(function (item) {
                tmp = item.split("=");
                if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            });
        return result;
    }

    window.makeid = function makeid() {
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 3; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        text += Math.floor(Math.random() * (99999 - 10000)) + 10000;
        return text;
    }

    window.clearPanelData = function clearPanelData(data, global_empty = true, extra_data = false) {
        let empty_array = true;

        let clear = {};
        let frame = {};
        let clear_array = '{"type":["text"],"header":[""],"data":[],"arrayType":"","table":"none","where":"","order":"","limit":"10","query":"","dbSet":"default","allCol":["none"],"col":["none"]}';

        console.log(data);
        let col_count = data.type.length;
        let row_count = data.data.length;

        clear.type = frame.type = data.type;
        clear.header = frame.header = data.header;
        clear.data = [];
        frame.data = [];

        if (extra_data) {
            frame.arrayType = data.arrayType ? data.arrayType : "array";
            frame.table = data.table ? data.table : "none";
            frame.where = data.where ? data.where : "";
            frame.order = data.order ? data.order : "";
            frame.limit = data.limit ? data.limit : "10";
            frame.query = data.query ? data.query : "";
            frame.dbSet = data.dbSet ? data.dbSet : "default";
            frame.allCol = data.allCol ? data.allCol : ["none"];
            frame.col = data.col ? data.col : ["none"];

            clear.arrayType = data.arrayType ? data.arrayType : "array";
            clear.table = data.table ? data.table : "none";
            clear.where = data.where ? data.where : "";
            clear.order = data.order ? data.order : "";
            clear.limit = data.limit ? data.limit : "10";
            clear.query = data.query ? data.query : "";
            clear.dbSet = data.dbSet ? data.dbSet : "default";
            clear.allCol = data.allCol ? data.allCol : ["none"];
            clear.col = data.col ? data.col : ["none"];

            for (const key in data) {
                if (!clear.hasOwnProperty(key)) clear[key] = frame[key] = data[key];
            }
        }

        let row_frame_hash = [];
        for (let i = 0, array_type = ['array', 'arrayDB']; i < array_type.length; i++) {
            let clear_row_hash = [];
            data.type.map((val) => {
                if (val == 'array') {
                    let clear_array_template = JSON.parse(clear_array);
                    clear_array_template['arrayType'] = array_type[i];
                    clear_row_hash.push(clear_array_template);
                } else clear_row_hash.push('');
            });
            row_frame_hash.push(JSON.stringify(clear_row_hash));
        }

        for (let j = 0; j < row_count; j++) {
            let row = [];
            let inject_row = false;

            let row_frame = [];
            let inject_row_frame = false;

            let local_empty_array = null;

            for (let i = 0; i < col_count; i++) {
                let ceil = data.data[j][i];

                switch (data.type[i]) {
                    case "array":
                        let ceil_frame;
                        [ceil, ceil_frame, global_empty, local_empty_array] =
                            clearPanelData(ceil, global_empty, true);

                        row[i] = ceil;
                        if (!inject_row) inject_row = true;

                        row_frame[i] = ceil_frame;
                        if (!inject_row_frame) inject_row_frame = true;

                        break;
                    case "text":
                    case "img":
                    case "textarea":
                    case "key":
                        row[i] = ceil.trim();
                        if (!inject_row && row[i] != "") inject_row = true;

                        row_frame[i] = "";

                        if (empty_array && row[i] != "") empty_array = false;

                        if (global_empty && row[i] != "") global_empty = false;

                        break;
                    default:
                        break;
                }
            }

            if (local_empty_array === null) {
                if (inject_row) clear.data.push(row);
                if (inject_row_frame) frame.data.push(row_frame);
            } else {
                if (local_empty_array) {
                    let row_hash_i = JSON.stringify(row);
                    if (row_frame_hash.indexOf(row_hash_i) < 0 && inject_row)
                        clear.data.push(row);
                } else {
                    if (inject_row) clear.data.push(row);
                }

                let row_frame_hash_i = JSON.stringify(row_frame);

                if (row_frame_hash.indexOf(row_frame_hash_i) < 0) {
                    if (inject_row_frame) frame.data.push(row_frame);
                    row_frame_hash.push(row_frame_hash_i);
                }
            }
        }

        return [clear, frame, global_empty, empty_array];
    }

    window.sortable_settings = {
        group: {
            name: "nested",
            put: function (to, from, el) {
                return !el.classList.contains("list-group-item-section");
            },
        },
        ghostClass: "gost",
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65,
        handle: ".btn-grab",
        dataIdAttr: "data-id",
        emptyInsertThreshold: 0,
        multiDrag: true,
        selectedClass: "selected",
        // forceFallback: true
    };



    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    let dataHub = new DataHub();
    w.dataHub = dataHub;

    dataHub.add_text.addEventListener("click", () => {
        dataHub.addText();
    });
    dataHub.add_navigation.addEventListener("click", () => {
        dataHub.addNavigation();
    });
    dataHub.add_section.addEventListener("click", () => {
        dataHub.addSection();
    });
    dataHub.add_panel.addEventListener("click", () => {
        dataHub.addPanel();
    });

    dataHub.form.addEventListener("submit", (e) => {
          // e.preventDefault();
        dataHub.goodBye();
    });

})(window, document);

$(document).on('focusin', function (e) {
    if ($(e.target).closest(".mce-window, .moxman-window").length) {
        e.stopImmediatePropagation();
    }
});

