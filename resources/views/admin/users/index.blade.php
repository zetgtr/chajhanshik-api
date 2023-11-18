@extends('layouts.admin')
@section('title', __('admin/user.title'))
@section('content')
    <div class="row row-cards">
        <div class="col-lg-12 col-xl-12">
            <div class="card">
                <div class="card-header card-header-divider">
                    <div>
                        <h3  class="card-title">{{__('admin/user.title')}}</h3>
                    </div>
                </div>
                <div class="card-body">
                    <div class="e-table px-5 pb-5">
                        <div class="d-flex justify-content-end mb-3">
                            <a href="{{ route('admin.user.create') }}" class="btn btn-sm btn-primary ">Добавить пользователя</a>
                        </div>
                        <div class="table-responsive table-lg">
                            <table id="example2" class="table table-bordered text-nowrap border-bottom">
                                <x-admin.users.table.head />
                                <tbody>
                                @foreach($users as $user)
                                    <x-admin.users.table.tr :user="$user"/>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- COL-END -->
    </div>
    <script src="{{ asset('assets/plugins/datatable/js/jquery.dataTables.min.js')}}"></script>
    <script src="{{ asset('assets/plugins/datatable/js/dataTables.bootstrap5.js')}}"></script>
    <script src="{{ asset('assets/plugins/datatable/js/dataTables.buttons.min.js')}}"></script>
    <script src="{{ asset('assets/plugins/datatable/js/buttons.bootstrap5.min.js')}}"></script>
    <script src="{{ asset('assets/plugins/datatable/js/jszip.min.js')}}"></script>
    <script src="{{ asset('assets/plugins/datatable/pdfmake/pdfmake.min.js')}}"></script>
    <script src="{{ asset('assets/plugins/datatable/pdfmake/vfs_fonts.js')}}"></script>
    <script src="{{ asset('assets/plugins/datatable/js/buttons.html5.min.js')}}"></script>
    <script src="{{ asset('assets/plugins/datatable/js/buttons.print.min.js')}}"></script>
    <script src="{{ asset('assets/plugins/datatable/js/buttons.colVis.min.js')}}"></script>
    <script src="{{ asset('assets/plugins/datatable/dataTables.responsive.min.js')}}"></script>
    <script src="{{ asset('assets/plugins/datatable/responsive.bootstrap5.min.js')}}"></script>
    <script src="{{ asset('assets/js/table-data.js')}}"></script>
    <script src="{{asset('assets/js/admin/delete.js')}}" ></script>
@endsection
