export function message(mes, status = null, dismissible = false, duration = 3000) {

    typeof mes === 'string' && (mes = {
        title: mes
    });
    $('#messages').show();
    let hInterval = setInterval(function () {
        if (!$('#messages').children().length) {
            $('#messages').hide();
            clearInterval(hInterval);
        }
    }, 500);
    $('#messages').prepend('<div class="message ' + (status ?? '') + '"><div class="message__text"><div class="message__text-inner"><div class="message__title">' + mes.title + '<span class="message__close"></span></div>' + ((typeof mes.content !== typeof undefined && ('<div class="message__content">' + mes.content + '</div>') || '')) + '</div></div></div>');
    let $this = $('#messages>.message:nth-child(1)');
    let mesWidth = $this.find('.message__text').outerWidth();
    let mesHeight = $this.find('.message__text').outerHeight();
    let handler = null;
    $($this)
        .animate({
            height: mesHeight + 'px'
        }, 100)
        .animate({
            marginRight: '0px'
        }, 200)
        .animate({
            width: mesWidth + 'px',
            opacity: '1'
        }, 500, function () {
            handler = !dismissible && setTimeout(function () {
                $($this).animate({
                    width: '0px',
                    opacity: '0'
                }, 500).animate({
                    height: '0px'
                }, 100, function () {
                    $($this).remove();
                })
            }, duration);

            $this.on('click', function () {
                handler && clearTimeout(handler);
                $($this).animate({
                    width: '0px',
                    opacity: '0'
                }, 500).animate({
                    height: '0px'
                }, 100, function () {
                    $($this).remove();
                })
            });
        });
}
