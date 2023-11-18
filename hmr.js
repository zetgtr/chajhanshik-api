export default function CustomHmr() {
    const excludedPaths = [
        '/app/storage/framework/sessions/',
        '/app/storage/framework/cache/data/',
        '/app/storage/',
    ];

    return {
        name: 'custom-hmr',
        enforce: 'post',
        // HMR
        handleHotUpdate({ file, server }) {
            const isExcluded = excludedPaths.some((path) => file.includes(path));

            if (isExcluded) {
                return;
            }

            console.log('Hot update detected:', file);

            server.ws.send({
                type: 'full-reload',
                path: '*'
            });
        },
    };
}