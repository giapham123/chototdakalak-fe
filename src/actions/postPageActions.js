import Service from '../service';

const service = new Service;
export function insertProduct(param) {
    return async function insertProduct(dispatch) {
        const response = await service.post('/admin/insert-product', param)
        dispatch({ type: 'product/insertData', payload: response.data })
    }
}
