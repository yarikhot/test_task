import {ADD_ITEMS} from './actions';

const initialState = {
    items: [
        {
            id: 1,
            title: 'to apple store',
            description: 'this is small path',
            distance: 115
        }
    ]
};

function homeReduser(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEMS:
            const idx = state.items.findIndex(item => item.id === action.id);
            state.items[idx].title = action.title;
            state.items[idx].description = action.description;
            state.items[idx].distance = action.distance;
            return Object.assign({}, state, {
                items: state.items
            });
        default:
            return state;
    }
}

const HomeReduser = {
    home: homeReduser
};


export default HomeReduser;

