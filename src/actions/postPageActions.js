import Service from '../service';

const service = new Service;
export function insertProduct(param) {
    return async function insertProduct(dispatch) {
        const response = await service.post('/login2/insert-product', param)
        dispatch({ type: 'product/insertData', payload: response.data })
    }
}
