<div class="order-left">
    <h2>{!! $title !!}</h2>
    <p>
        {!! $desc !!}
    </p>
    <div class="order-contacts">
        <a class="order-contacts-tel" href="{{$contact['phone']['value']}}">{{ $contact['phone']['value'] }}</a>
        <a class="order-contacts-mail" href="mailto:{{$contact['email']['value']}}">{{
        $contact['email']['value']
      }}</a>
    </div>
</div>
