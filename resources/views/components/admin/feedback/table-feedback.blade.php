<table id="example2" class="table table-bordered text-nowrap border-bottom">
    <thead>
    <tr>
        <th class="border-bottom-0 text-center">Дата</th>
        <th class="border-bottom-0 text-center">Контактное лицо</th>
        <th class="border-bottom-0 text-center">Email</th>
        <th class="border-bottom-0 text-center">Телефон</th>
        <th class="border-bottom-0 text-center">Страница</th>
    </tr>
    </thead>
    <tbody>
    @foreach($feedbacks as $feedback)
        <tr class="delete-element">
            <td class="text-center">{{ $feedback->created_at->format('d.m.Y H:i') }}</td>
            <td class="text-center">{{ $feedback->name }}</td>
            <td class="text-center">{{ $feedback->email }}</td>
            <td class="text-center">{{ $feedback->phone }}</td>
            <td class="text-center"><a href="{{$feedback->pages}}">{{ $feedback->pages }}</a></td>
        </tr>
    @endforeach
    </tbody>
</table>
<script src="{{ asset('assets/js/table-data.js')}}"></script>
