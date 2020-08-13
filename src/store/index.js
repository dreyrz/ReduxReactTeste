import { createStore } from 'redux';

const estado_inicial = { contador: 0 };

function reducer(state = estado_inicial, action) {
    switch (action.type) {
        case 'incrementar':
            return { contador: state.contador + 1 };
        case 'decrementar':
            return { contador: state.contador - 1 };
        default:
            return state;
    };
}

const store = createStore(reducer);

export default store;