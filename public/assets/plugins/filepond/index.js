import { openEditor,
    createDefaultImageReader,
    createDefaultImageWriter,
    processImage,
    getEditorDefaults} from './pintura/pintura.js';
import FilePondPluginImageEditor from './pintura/FilePondPluginImageEditor.js'
import FilePondPluginFilePoster from './filepond-plugin-image-edit.js'

const inputElement = document.querySelector('.filepond');
FilePond.registerPlugin(FilePondPluginFilePoster,FilePondPluginImageEditor);

FilePond.create(inputElement, {
    allowReorder: true,
    filePosterMaxHeight: 256,
    maxFiles: 10,
    acceptedFileTypes: ['image/*'],
    storeAsFile: true,
    imageEditor: {

        createEditor: openEditor,

        imageReader: [createDefaultImageReader],

        imageWriter: [
            createDefaultImageWriter,
        ],

        imageProcessor: processImage,
        editorOptions: {
            ...getEditorDefaults(),
        },
    },
});
