import axios from "axios";
// ниже название панели + Module
export const {{ $alias }}Module = {
    state: () => ({
        // тут алиас столбцов : тип данных
    @foreach($data[0] as $key=>$item)
      {{ $key }} : @if(is_array($item))[]@else"" @endif,
    @endforeach
    }),
    getters: {

    },
    mutations: {
        // для каждого алиаса свой set
    @foreach($data[0] as $key=>$item)
    set{{ ucfirst($key) }}(state, {{ $key }}){
            state.{{ $key }} = {{ $key }}
        },
    @endforeach
    },
    actions: {
        async fetchInfo({state, commit}, argument) {
            try {
                const response = await axios.get('/api/panel_data/{{ $alias }}', {
                    data: argument,
                    params: {
                    }
                });
                // коммит название мутации
            @foreach($data[0] as $key=>$item)
      commit('set{{ ucfirst($key) }}', response.data[0].{{ $key }})
            @endforeach
    } catch (e) {
                console.log(e)
            } finally {

            }
        },
    },
    namespaced: true
}
