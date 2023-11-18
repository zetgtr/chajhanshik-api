@extends('layouts.admin')
@section('title', __('admin/page.dashboard'))
@section('content')
    <script src="{{  asset('assets/plugins/chart/Chart.bundle.js')}}"></script>
    <script src="{{  asset('assets/js/admin/home/chartVisit.js')}}"></script>
    <script src="{{  asset('assets/js/admin/home/chartDevice.js')}}"></script>
    <script src="{{  asset('assets/js/admin/home/chartBrowser.js')}}"></script>
    <script src="{{  asset('assets/js/admin/home/chartAge.js')}}"></script>
    <input type="hidden" id="metrika" value="{{ $metrika }}">
    <input type="hidden" id="devices" value="{{ $device }}">
    <input type="hidden" id="browser" value="{{ $browser }}">
    <input type="hidden" id="age" value="{{ $age }}">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Посещаемость сайта</h3>
                            </div>
                            <x-admin.navigatin-js :links="$links" />
                            <div class="card-body">
                                <div class="tab-content">
                                    <div class="tab-pane fade active show" id="{{ App\Enums\MetrikaEnums::USERS->value }}" role="tabpanel" aria-labelledby="{{ App\Enums\MetrikaEnums::USERS->value }}-link">
                                        <div class="d-flex justify-content-center">
                                            <div>
                                                <span class="dot-label bg-primary my-auto"></span>
                                                Пользователи
                                            </div>
                                            <div class="mx-4">
                                                <span class="dot-label bg-danger my-auto"></span>
                                                Выбранный день
                                            </div>
                                        </div>

                                        <div class="chartjs-wrapper-demo">
                                            <canvas id="{{ App\Enums\MetrikaEnums::USERS->value }}-table" class="chart-dropshadow table-metrika"></canvas>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="{{ App\Enums\MetrikaEnums::VISITS->value }}" role="tabpanel" aria-labelledby="{{ App\Enums\MetrikaEnums::VISITS->value }}-link">
                                        <div class="d-flex justify-content-center">
                                            <div>
                                                <span class="dot-label bg-primary my-auto"></span>
                                                Визиты
                                            </div>
                                            <div class="mx-4">
                                                <span class="dot-label bg-danger my-auto"></span>
                                                Выбранный день
                                            </div>
                                        </div>
                                        <div class="chartjs-wrapper-demo">
                                            <canvas id="{{ App\Enums\MetrikaEnums::VISITS->value }}-table" class="chart-dropshadow table-metrika"></canvas>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="{{ App\Enums\MetrikaEnums::PAGEVIEWS->value }}" role="tabpanel" aria-labelledby="{{ App\Enums\MetrikaEnums::PAGEVIEWS->value }}-link">
                                        <div class="d-flex justify-content-center">
                                            <div>
                                                <span class="dot-label bg-primary my-auto"></span>
                                                Просмотры
                                            </div>
                                            <div class="mx-4">
                                                <span class="dot-label bg-danger my-auto"></span>
                                                Выбранный день
                                            </div>
                                        </div>
                                        <div class="chartjs-wrapper-demo">
                                            <canvas id="{{ App\Enums\MetrikaEnums::PAGEVIEWS->value }}-table" class="chart-dropshadow table-metrika"></canvas>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <style>
                        .table-metrika{
                            height: 330px!important;
                        }
                        .container-device{
                            width: 350px;
                        }
                    </style>
                </div>
                <!-- ROW-2 END -->

                <!-- ROW-3 -->
                <div class="row">
                    <div class="col-xl-4 col-lg-6 col-md-12">
                        <div class="card overflow-hidden">
                            <div class="card-header">
                                <div>
                                    <h3 class="card-title device-title">Устройства на {{ date("d.m.Y") }}</h3>
                                </div>
                            </div>
                            <div class="card-body p-0 mt-2 ">
                                <div class="d-flex justify-content-center">
                                    <div class="container-device">
                                        <canvas id="device-chart" class="chart-dropshadow device-metrika"></canvas>
                                    </div>
                                </div>

                                <div class="table-responsive mt-2 text-center">
                                    <table class="table text-nowrap border-dashed mb-0">
                                        <thead>
                                        <tr>
                                            <th class="text-start"></th>
                                            <th class="">Кол-во</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr class="mobile-metrika metrika-device">
                                            <td class="text-start p-4 "><span
                                                    class="sales-icon text-primary mx-2 brround bg-primary-transparent p-2"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="18"
                                                        height="18" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                                                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                                                </svg></span><span class="mobile">Смартфон</span>
                                            </td>
                                            <td class="p-4 mobile-count"></td>
                                        </tr>
                                        <tr class="desktop-metrika metrika-device">
                                            <td class="text-start p-4 "><span
                                                    class="sales-icon text-secondary mx-2 brround bg-secondary-transparent p-2"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="18"
                                                        height="18" fill="currentColor
                                " class="bi bi-display" viewBox="0 0 16 16">
                                                                    <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46
                                    0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757
                                    0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
                                                                </svg></span>ПК</td>
                                            <td class="p-4 desktop-count"></td>
                                        </tr>
                                        <tr class="tablet-metrika metrika-device">
                                            <td class="text-start p-4 "><span
                                                    class="sales-icon text-danger mx-2 brround bg-danger-transparent p-2"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="18"
                                                        height="18" fill="currentColor" class="bi bi-tablet
                                " viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                                                                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                                                </svg></span>Планшет</td>
                                            <td class="p-4 tablet-count"></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <!--end /table-->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title fw-semibold title-browser">Браузеры на {{ date("d.m.Y") }}</h4>
                            </div>
                            <div class="card-body">
                                <div class="browser-stats">
                                    <div class="row mb-5">
                                        <div class="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                                            <img src="{{ asset('assets/images/browsers/chrome.svg') }}" class="img-fluid"
                                                 alt="img">
                                        </div>
                                        <div class="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                                            <div class="d-flex align-items-end justify-content-between mb-1">
                                                <h6 class="mb-1">Chrome</h6>
                                                <h6 class="fw-semibold mb-1 chrome-count metrika-count-browser">35,502</h6>
                                            </div>
                                            <div class="progress h-2 mb-3">
                                                <div class="progress-bar bg-primary chrome-progress progress-metrika-browser" style="width: 20%;"
                                                     role="progressbar"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-5">
                                        <div class="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                                            <img src="{{asset('assets/images/browsers/yandex.svg')}}" class="img-fluid"
                                                 alt="img">
                                        </div>
                                        <div class="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                                            <div class="d-flex align-items-end justify-content-between mb-1">
                                                <h6 class="mb-1">Yandex</h6>
                                                <h6 class="fw-semibold mb-1 yandex-count metrika-count-browser">35,502 </h6>
                                            </div>
                                            <div class="progress h-2 mb-3">
                                                <div class="progress-bar bg-green yandex-progress progress-metrika-browser" style="width: 30%;"
                                                     role="progressbar"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-5">
                                        <div class="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                                            <img src="{{ asset('assets/images/browsers/opera.svg') }}" class="img-fluid"
                                                 alt="img">
                                        </div>
                                        <div class="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                                            <div class="d-flex align-items-end justify-content-between mb-1">
                                                <h6 class="mb-1">Opera</h6>
                                                <h6 class="fw-semibold mb-1 opera-count metrika-count-browser">12,563</h6>
                                            </div>
                                            <div class="progress h-2 mb-3">
                                                <div class="progress-bar bg-secondary opera-progress progress-metrika-browser" style="width: 40%;"
                                                     role="progressbar"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-5">
                                        <div class="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                                            <img src="{{ asset('assets/images/browsers/firefox.svg') }}" class="img-fluid"
                                                 alt="img">
                                        </div>
                                        <div class="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                                            <div class="d-flex align-items-end justify-content-between mb-1">
                                                <h6 class="mb-1">Firefox</h6>
                                                <h6 class="fw-semibold mb-1 firefox-count metrika-count-browser">14,635</h6>
                                            </div>
                                            <div class="progress h-2 mb-3">
                                                <div class="progress-bar bg-danger firefox-progress progress-metrika-browser" style="width: 50%;"
                                                     role="progressbar"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-5">
                                        <div class="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                                            <img src="{{ asset('assets/images/browsers/edge.svg') }}" class="img-fluid"
                                                 alt="img">
                                        </div>
                                        <div class="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                                            <div class="d-flex align-items-end justify-content-between mb-1">
                                                <h6 class="mb-1">Edge</h6>
                                                <h6 class="fw-semibold mb-1 edge-count metrika-count-browser">15,453</h6>
                                            </div>
                                            <div class="progress h-2 mb-3">
                                                <div class="progress-bar bg-warning edge-progress progress-metrika-browser" style="width: 10%;"
                                                     role="progressbar"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-5">
                                        <div class="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                                            <img src="{{asset('assets/images/browsers/safari.svg')}}" class="img-fluid"
                                                 alt="img">
                                        </div>
                                        <div class="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                                            <div class="d-flex align-items-end justify-content-between mb-1">
                                                <h6 class="mb-1">Safari</h6>
                                                <h6 class="fw-semibold mb-1 safari-count metrika-count-browser">10,054</h6>
                                            </div>
                                            <div class="progress h-2 mb-3">
                                                <div class="progress-bar bg-info safari-progress progress-metrika-browser" style="width: 40%;"
                                                     role="progressbar"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-5">
                                        <div class="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                                            <img src="{{asset('assets/images/browsers/samsung-internet.svg')}}" class="img-fluid"
                                                 alt="img">
                                        </div>
                                        <div class="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                                            <div class="d-flex align-items-end justify-content-between mb-1">
                                                <h6 class="mb-1">Samsung</h6>
                                                <h6 class="fw-semibold mb-1 samsung-count metrika-count-browser">35,502</h6>
                                            </div>
                                            <div class="progress h-2 mb-3">
                                                <div class="progress-bar bg-green samsung-progress progress-metrika-browser" style="width: 30%;"
                                                     role="progressbar"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                                            <img src="{{ asset('assets/images/browsers/android-browser.svg') }}" class="img-fluid"
                                                 alt="img">
                                        </div>
                                        <div class="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                                            <div class="d-flex align-items-end justify-content-between mb-1">
                                                <h6 class="mb-1">Другой</h6>
                                                <h6 class="fw-semibold mb-1 default-count metrika-count-browser">25,364</h6>
                                            </div>
                                            <div class="progress h-2 mb-3">
                                                <div class="progress-bar bg-success default-progress progress-metrika-browser" style="width: 50%;"
                                                     role="progressbar"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-12">
                        <div class="card overflow-hidden">
                            <div class="card-header">
                                <div>
                                    <h3 class="card-title age-title">Возраст на {{ date("d.m.Y") }}</h3>
                                </div>
                            </div>
                            <div class="card-body p-0 mt-2 ">
                                <div class="d-flex justify-content-center">
                                    <div class="container-device">
                                        <canvas id="age-chart" class="chart-dropshadow age-metrika"></canvas>
                                    </div>
                                </div>

                                <div class="table-responsive mt-2 text-center">
                                    <table class="table text-nowrap border-dashed mb-0">
                                        <thead>
                                        <tr>
                                            <th class="text-start"></th>
                                            <th class="">Кол-во</th>
                                        </tr>
                                        </thead>
                                        <tbody class="toby-age-container"></tbody>
                                    </table>
                                    <!--end /table-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <template id="age-template">
                    <tr class="metrika-age">
                        <td class="text-start p-4 ">
                            <span class="text-age"></span>
                        </td>
                        <td class="p-4 age-count"></td>
                    </tr>
                </template>
@endsection
