import axios from "axios";
// ниже название панели + Module
export const servicesModule = {
    state: () => ({
        // тут алиас столбцов : тип данных
    @foreach($states as $state)
        {{ $state->neme }} : @if($state->type == "array") [] @else "" @endif,
    @endforeach
    }),
    getters: {

    },
    mutations: {
        // для каждого алиаса свой set
        setDesc(state, desc){
            state.desc = desc
        },
        setSlider(state, slider){
            state.slider = slider
        },
        setSliderThumb(state, slider_thumb){
            state.slider_thumb = slider_thumb
        },
    },
    actions: {
        async fetchInfo({state, commit}, argument) {
            try {
                const response = await axios.get('/api/panel_data/services', {
                    data: argument,
                    params: {
                    }
                });
                // коммит название мутации
                commit('setDesc', response.data[0].desc)
                commit('setSlider', response.data[0].slider[0].slider_item)
                commit('setSliderThumb', response.data[0].slider[0].slider_thumb)
            } catch (e) {
                console.log(e)
            } finally {

            }
        },
    },
    namespaced: true
}
