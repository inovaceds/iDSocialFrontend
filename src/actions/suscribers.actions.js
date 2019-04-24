import axios from 'axios'
import { CREATE_SUSCRIBER } from './suscribers.types';
import { API_IDSOCIAL } from '../config/api.config';

export const createSuscriber = (suscriber) => async dispatch => {
    const response = await axios.post(API_IDSOCIAL + 'productos', suscriber);
    dispatch({
        type: CREATE_SUSCRIBER,
        payload: response.data
    })
}