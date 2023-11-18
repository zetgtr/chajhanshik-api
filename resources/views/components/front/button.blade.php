<div
    id="{{!empty($id) ? $id : ""}}"
    href=""
    class="button button-click button--orange first__btn wow fadeIn @if (!empty($dopClass))
        {{ $dopClass }}
    @endif"
    data-wow-delay="0.5s"
>
    <span>{{$text}}</span>
    <b></b>
    <s></s>

</div>
