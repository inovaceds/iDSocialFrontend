import { CREATE_SUSCRIBER } from "../actions/suscribers.types";

const INITIAL_STATE = {
    suscribers: []
};
 
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_SUSCRIBER:
        return {...state, productos: [...state.suscribers, action.payload]}
        default:
            return state
    }
}