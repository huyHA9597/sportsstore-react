import { ActionTypes } from './Types';
export const ShopReducer = (storeData, action) => {
    switch (action.Type) {
        case ActionTypes.DATA_LOAD:
            return {
                ...storeData,
                [action.payload.dataType]: action.payload.data,
            };
        default:
            return storeData || {};
    }
};
