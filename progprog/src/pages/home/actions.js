export const ADD_ITEMS = 'EDIT_ITEMS';


export function addItems(item) {
    const {id, title, description, distance} = item;
    return {
        type: ADD_ITEMS,
        id, title, description, distance
    };
}




