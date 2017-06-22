import * as types from './types';

function addErrorsSuccess(errorObj) {
    return {
        type: types.ADD_ERROR_SUCCESS,
        payload: errorObj
    }
}

function removeErrorSuccess(errorObj) {
    return {
        type: types.REMOVE_ERROR_SUCCESS,
        payload: errorObj
    }
}

export {
    addErrorsSuccess,
    removeErrorSuccess
}