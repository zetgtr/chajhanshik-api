<template>
@foreach($componentsList as $component)
    <{{ $component['component'] }}>
@endforeach
</template>

<script>

@foreach($componentsList as $component)
    {{ $component['import'] }}'{{$component['from']}}'
@endforeach

    export default {
        components: {
    @foreach($componentsList as $component)
        {{ $component['export']."," }}
    @endforeach
        },
        data(){
            return{
                captionTitle: '{{ $title }}',
            }
        },
        created() {
            this.breadcrumbs = this.$route.meta.breadcrumbs;
            console.log(this.breadcrumbs);
        },
    };
</script>

<style scoped lang='scss'>

</style>
