import request from '../utils/request'

const saveReducer = (data) => ({
    type: 'save',
    payload: data
})

export const getTest = () => async (dispatch) => {
    try {
        let response = await request('api/page3')
        await dispatch(saveReducer(response))
    } catch (error) {
        console.log('error: ', error)
    }
}