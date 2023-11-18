export let tinymce_param = {
    valid_elements: '*[*]',
    extended_valid_elements: '*[*]',
    forced_root_block: '',
    path_absolute: "/",
    language: 'ru',
    paste_text_use_dialog: true,
    height: 400,
    forced_root_block: 'p',
    relative_urls: false,
    plugins: [
        "advlist autolink lists link image charmap print preview hr anchor pagebreak",
        "searchreplace wordcount visualblocks visualchars code fullscreen",
        "insertdatetime media nonbreaking save table directionality",
        "emoticons template paste textpattern"
    ],
    toolbar: 'styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link media insertfile image | code',
    file_picker_callback: function (callback, value, meta) {
        let x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
        let y = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
        let type = 'image' === meta.filetype ? 'Images' : 'Files',
            url = editor_config.path_absolute + 'laravel-filemanager?editor=tinymce5&type=' + type;

        tinymce.activeEditor.windowManager.openUrl({
            url: url,
            title: 'Filemanager',
            width: x * 0.8,
            height: y * 0.8,
            onMessage: (api, message) => {
                callback(message.content);
            }
        });
    },
    theme_advanced_resizing: true,
};
