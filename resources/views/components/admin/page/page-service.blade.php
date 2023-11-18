<div class="pgcr">
    <input type="hidden" name="datahub" id="datahub_storage" value="@if(!empty($datahub)) {{ $datahub }} @endif">
    <div class="pgcr-workshop">
        <div id="datahub"></div>
    </div>
    <div class="pgcr-buttons">
        <button class="btn btn-sm btn-primary" type="button" id="datahub_add_section">Добавить секцию</button>
        <button class="btn btn-sm btn-primary" type="button" id="datahub_add_panel">Добавить панель <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span></button>
        <button class="btn btn-sm btn-primary" type="button" id="datahub_add_text">Добавить текст <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span></button>
        <button class="btn btn-sm btn-dark" type="button" id="datahub_add_navigation">Добавить навигацию <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span></button>

    </div>
</div>

<template id="datahub_modal">
    <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"></h5>
                    <button aria-label="Close" class="btn-close" data-bs-dismiss="modal">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body"></div>
                <div class="modal-footer">
                    <div class="buttons-extends"></div>
                    <button type="button" class="btn btn-sm btn-danger" data-bs-dismiss="modal">Отмена</button>
                    <button type="button" class="btn btn-sm btn-primary modal-save">Сохранить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<template id="datahub_section">
    <div class="list-group-item list-group-item-section">
        <div class="line line-section">
            <div class="btn btn-sm btn-primary btn-grab"><i class="fas fa-grip-lines"></i></div>
            <div class="line__shield">
                <i class="shield shield-warn fas fa-exclamation-triangle"></i>
                <i class="shield shield-safe fas fa-share-alt"></i>
            </div>
            <div class="line__name">SECTION</div>
            <div class="line__control btn-i-box">
                <div class="btn btn-i btn-remove_sect"><i class="fas fa-ban"></i></div>
                <div class="btn btn-i btn-remove"><i class="far fa-times-circle"></i></div>
                <div class="btn btn-i btn-anchor"><i class="fab fa-slack-hash"></i></div>
                <div class="btn btn-i btn-display btn-show"><i class="far fa-eye-slash"></i></div>
                <div class="btn btn-i btn-display btn-hide"><i class="far fa-eye"></i></div>
                <div class="btn btn-i btn-edit"><i class="fas fa-edit"></i></div>
            </div>
        </div>
        <div class="list-group nested-sortable"></div>
    </div>
</template>

<template id="datahub_text">
    <div class="list-group-item">
        <div class="line line-text">
            <div class="btn btn-sm btn-primary btn-grab"><i class="fas fa-grip-lines"></i></div>
            <div class="line__shield">
                <i class="shield shield-warn fas fa-exclamation-triangle"></i>
            </div>
            <span class="line__name">text</span>
            <div class="line__control btn-i-box">
                <div class="btn btn-i btn-remove"><i class="far fa-times-circle"></i></div>
                <div class="btn btn-i btn-display btn-show"><i class="far fa-eye-slash"></i></div>
                <div class="btn btn-i btn-display btn-hide"><i class="far fa-eye"></i></div>
                <div class="btn btn-i btn-edit"><i class="fas fa-edit"></i></div>
            </div>
        </div>
    </div>
</template>

<template id="datahub_panel">
    <div id="list_group_item">
        <div class="list-group-item">
            <div class="line line-panel">
                <div class="btn btn-sm btn-primary btn-grab"><i class="fas fa-grip-lines"></i></div>
                <div class="line__shield">
                    <i class="shield shield-warn fas fa-exclamation-triangle"></i>
                    <i class="shield shield-panel fas fa-share"></i>
                    <i class="shield shield-safe fas fa-share-alt"></i>
                </div>
                <span class="line__name">PANEL</span>
                <div class="line__control btn-i-box">
                    <div class="btn btn-i btn-remove"><i class="far fa-times-circle"></i></div>
                    <div class="btn btn-i btn-anchor"><i class="fab fa-slack-hash"></i></div>
                    <div class="btn btn-i btn-display btn-show"><i class="far fa-eye-slash"></i></div>
                    <div class="btn btn-i btn-display btn-hide"><i class="far fa-eye"></i></div>
                    <div class="btn btn-i btn-edit"><i class="fas fa-edit"></i></div>
                </div>
                <div class="line__data d-none"></div>
            </div>
        </div>
    </div>
    <div id="list_panel">
        <table class="table list_panel">
            <thead class="thead-dark">
            <tr>
                <th scope="col">Название панели</th>
                <th scope="col">Описание</th>
                <th scope="col">Данные / Каркас</th>
            </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>

    <table id="list_panel_item">
        <tr class="panel-line">
            <td><span></span></td>
            <td onclick="this.classList.toggle('show')"><span></span></td>
            <td>
                <div class="panel-line__control btn-i-box">
                    <div class="btn btn-i btn-full"><i class="fas fa-check-circle"></i></div>
                    <div class="btn btn-i btn-frame"><i class="far fa-check-circle"></i></div>
                </div>
            </td>
        </tr>
    </table>

    <table id="list_panel_item_empty">
        <tr class="list-panel-item-empty">
            <td colspan="2">Панели не созданы</td>
            <td colspan="3">
                <a target="_blank" href="{{ route('admin.panel.create') }}" class="btn btn-sm btn-success">Создать</a>
            </td>
        </tr>
    </table>
</template>

<x-admin.page.datahub />

{{--@dd(\Illuminate\Support\Facades\Auth::user())--}}
@vite('resources/sass/admin/panel.scss')
<input type="hidden" id="select_table" value="{{ route('admin.panel-select') }}">
<input type="hidden" id="panel_all_url" value="{{ route('admin.panel-all-get') }}">
<script src="{{ asset('assets/js/admin/page/custom_pages.js') }}"></script>
<script src="{{ asset('assets/js/admin/page/sort-table.min.js') }}"></script>
<script src="{{ asset('assets/js/admin/page/datahub.js') }}" type="module"></script>
<link id="style" href="{{ asset('assets/css/admin/page_creator.css') }}" rel="stylesheet" />
<link id="style" href="{{ asset('assets/css/admin/panel.css') }}" rel="stylesheet" />
