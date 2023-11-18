<div class="dropdown">
    <input
        type="text"
        class="textBox def"
        placeholder="{{$placeholder}}"
        name="{{$name}}"
        readonly
    />
    <div class="option">
        @foreach($options as $option)
            <div>{{ $option }}</div>
        @endforeach
    </div>
    <i></i>
</div>

