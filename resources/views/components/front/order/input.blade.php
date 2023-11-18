<div class="inputbox @if ($name !== 'company') to-valid @endif">
    <input value="{{$value}}" name="{{$name}}" @if ($name !== 'company') required @endif @if (!empty($type)) type="tel" @else type="text" @endif />
    <span>{{ $label }}</span>
    <span class="not-valid-span">{{ !empty($text) ? $text : '' }}</span>
    <i></i>
</div>
