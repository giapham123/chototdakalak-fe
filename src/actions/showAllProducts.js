import Service from '../service';
// Thunk function
const service = new Service;
export function showAllProductViaCategory(param) {
    return async function showAllProductViaCategory(dispatch) {
        const response = await service.get('/view/show-data-category/'+param.path + '/' + param.page)
        dispatch({ type: 'allProduct/getAllProduct', payload: response.data })
    }
}
