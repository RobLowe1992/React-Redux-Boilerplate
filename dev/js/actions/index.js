import * as types from '../constants/ActionTypes';

export const selectUser = user => {
    console.log(`You clicked on user: ${user.first}`);
    return {
        type: types.CLICKED_USER,
        user
    }
};