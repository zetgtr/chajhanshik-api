<template id="add-packages">
    <form action="{{ route('admin.packages.create') }}" method="get" id="form-add-edit" class="row">
        <div class="col-4">
            <div class="form-group">
                <label for="name">Название</label>
                <input type="text" name="name" id="name" class="form-control">
            </div>
        </div>
        <div class="col-8">
            <div class="form-group">
                <label for="provider">Провайдер</label>
                <input type="text" name="provider" id="provider" class="form-control">
            </div>
        </div>
        <div class="col-4">
            <div class="form-group">
                <label for="url">Url</label>
                <input type="text" name="url" id="url" class="form-control">
            </div>
        </div>
        <div class="col-8">
            <div class="form-group">
                <label for="delete">Класс удаления пакета</label>
                <input type="text" name="delete" id="delete" class="form-control">
            </div>
        </div>
        <div class="col-6">
            <div class="d-flex align-items-center form-group">
                <label class="custom-switch m-0">
                    <input type="checkbox" value="1" class="custom-switch-input" id="migration" name="migration">
                    <span class="custom-switch-indicator"></span>
                </label>
                <label class="form-label mx-2" for="migration">Включить миграцию</label>
            </div>
        </div>
        <div class="col-6 seeder-form">
            <div class="d-flex align-items-center form-group">
                <label class="custom-switch m-0">
                    <input type="checkbox" value="1" class="custom-switch-input" id="seeder" name="seeder">
                    <span class="custom-switch-indicator"></span>
                </label>
                <label class="form-label mx-2" for="seeder">Включить сидеры</label>
            </div>
        </div>
        <div class="col-6">
            <div class="d-flex align-items-center form-group">
                <label class="custom-switch m-0">
                    <input type="checkbox" value="1" class="custom-switch-input" id="script" name="script">
                    <span class="custom-switch-indicator"></span>
                </label>
                <label class="form-label mx-2" for="seeder">Опубликовать скрипты</label>
            </div>
        </div>
        <div class="col-6">
            <div class="d-flex align-items-center form-group">
                <label class="custom-switch m-0">
                    <input type="checkbox" value="1" class="custom-switch-input" id="view" name="view">
                    <span class="custom-switch-indicator"></span>
                </label>
                <label class="form-label mx-2" for="seeder">Опубликовать view</label>
            </div>
        </div>
        <div class="col-6">
            <div class="d-flex align-items-center form-group">
                <label class="custom-switch m-0">
                    <input type="checkbox" value="1" class="custom-switch-input" id="vue" name="vue">
                    <span class="custom-switch-indicator"></span>
                </label>
                <label class="form-label mx-2" for="seeder">Опубликовать vue</label>
            </div>
        </div>
        <div class="col-12">
            <input type="submit" id="button_success" value="Добавить" class="btn btn-success w-100">
        </div>
    </form>
</template>
<template id="seeder_template">
    <div class="col-12 seeder_box">
        <div class="form-group">
            <label for="name_seeder">Название сидера</label>
            <input type="text" name="name_seeder" id="name_seeder" class="form-control">
        </div>
    </div>
</template>

