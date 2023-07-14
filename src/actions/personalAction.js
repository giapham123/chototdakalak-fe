import Service from '../service';

const service = new Service;
export function getPersonalProduct(param) {
    return async function getPersonalProduct(dispatch) {
        const response = await service.get('/view/show-data-user/'+param)
        dispatch({ type: 'GET_INF_USER', payload: response.data.data })
    }
}

export function getPersonalProductPage(param) {
    return async function getPersonalProductPage(dispatch) {
        const response = await service.get('/view/show-data-user/'+param.path + '/' + param.page)
        dispatch({ type: 'GET_ALL_DATA_PER', payload: response.data.data })
    }
}
